<?php

namespace App\Controller;

use App\Entity\Images;
use App\Entity\Posts;
use App\Form\PostsType;
use App\Repository\PostsRepository;
use Doctrine\Persistence\ObjectManager;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PostsController extends AbstractController
{
    private Filesystem $filesystem;

    public function __construct(Filesystem $filesystem)
    {
        $this->filesystem = $filesystem;
    }

    /**
     * @Route("/admin/posts/", name="posts_index", methods={"GET"})
     */
    public function index(PostsRepository $postsRepository, PaginatorInterface $paginator, Request $request): Response
    {
        $posts = $paginator->paginate(
            $postsRepository->findAll(),
            //Le numero de la page, si aucun numero, on force la page 1
            $request->query->getInt('page', 1),
            //Nombre d'élément par page
            10
        );

        return $this->render('posts/index.html.twig', [
            'posts' => $posts,
        ]);
    }

    /**
     * @Route("/admin/posts/new", name="posts_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $post = new Posts();
        $form = $this->createForm(PostsType::class, $post);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $post->setKeywords(array_filter(explode('#', $form->get('keywords')->getData())));
            $post->setCreatedAt(new \DateTime('now', new \DateTimeZone('Europe/Paris')));
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($post);
            $entityManager->flush();
            $this->addFlash('success', 'Nouvel article créé.');

            return $this->redirectToRoute('posts_index');
        }

        return $this->render('posts/new.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
            'images' => [],
        ]);
    }

    /**
     * @Route("/admin/posts/{id}", name="posts_show", methods={"GET"})
     */
    public function show(Posts $post): Response
    {
        return $this->render('posts/show.html.twig', [
            'post' => $post,
        ]);
    }

    /**
     * @Route("/admin/posts/{id}/edit", name="posts_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Posts $post): Response
    {
        //Récupération des noms de fichiers images pour suppression ultérieure des miniatures
        $oldImages = $post->getImages()->toArray();
        $oldImagesNames = $this->getImagesNames($oldImages);
        $form = $this->createForm(PostsType::class, $post);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            //on appelle le manager d'entité
            $entityManager = $this->getDoctrine()->getManager();
            //On récupère les instances de l'entité Images, instanciées lors de la collection dans le formulaire d'ajout d'images
            $newImages = $post->getImages();
            $newImagesNames = $this->getImagesNames($newImages->toArray());
            $this->deleteImages($oldImagesNames, $newImagesNames, $oldImages, $entityManager);
            $this->deleteFiles($oldImagesNames, $newImagesNames);
            //Récupération des mots-clés en tant que chaine de caractères et séparation en array avec un délimiteur ";"
            $post->setKeywords(array_filter(explode('#', $form->get('keywords')->getData())));
            $post->setCreatedAt(new \DateTime('now', new \DateTimeZone('Europe/Paris')));
            $entityManager->flush();
            //Envoi d'un message utilisateur
            $this->addFlash('success', 'L\'article a bien été modifié.');

            return $this->redirectToRoute('posts_index');
        }

        return $this->render('posts/edit.html.twig', [
            'post' => $post,
            'images' => $oldImagesNames,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Undocumented function.
     *
     * @param Images[] $imageCollecion
     *
     * @return array<int, string>
     */
    public function getImagesNames($imageCollecion)
    {
        $imagesNames = [];
        foreach ($imageCollecion as $image) {
            $imagesNames[] = $image->getName();
        }

        return $imagesNames;
    }

    /**
     * Undocumented function.
     *
     * @param array<int, string> $oldImagesNames
     * @param array<int, string> $images_names
     * @param array<int, Images> $oldImages
     * @param ObjectManager      $entityManager
     */
    public function deleteImages($oldImagesNames, $images_names, $oldImages, $entityManager): void
    {
        $images_to_delete = array_diff($oldImagesNames, $images_names);
        foreach ($images_to_delete as $key => $image) {
            //Suppression en bdd de l'ancien jeu d'instances Images
            if ($oldImages[$key]->getName() === $image) {
                $entityManager->remove($oldImages[$key]);
            }
        }
    }

    /**
     * Undocumented function.
     *
     * @param array<int, string> $oldImagesNames
     * @param array<int, string> $images_names
     */
    public function deleteFiles($oldImagesNames, $images_names): void
    {
        $files_to_delete = array_diff($oldImagesNames, $images_names);
        foreach ($files_to_delete as $image) {
            //Suppression des fichiers correspondants
            $finder = new Finder();
            $finder->files()->name($image)->in('../public');
            foreach ($finder as $key => $file) {
                $fileNameWithExtension[] = $file->getRelativePathname();
                $this->filesystem->remove('../public/'.$file->getRelativePathname());
            }
        }
    }

    /**
     * @Route("/admin/posts/{id}", name="posts_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Posts $post): Response
    {
        if ($this->isCsrfTokenValid('delete'.$post->getId(), $request->request->get('_token'))) {
            //Appel du manager de Doctrine
            $entityManager = $this->getDoctrine()->getManager();

            //Suppression des images et des miniatures associées au produit
            $images = $post->getImages()->toArray();
            $imagesNames = $this->getImagesNames($images);
            $this->deleteFiles($this->getImagesNames($images), []);
            $this->deleteImages($imagesNames, [], $images, $entityManager);
            //Commentaires associés au produit
            $comments = $post->getComments();
            foreach ($comments as $comment) {
                //Rupture entre les commentaires et le produit
                $post->removeComment($comment);
                //Suppression des commentaires si l'administrateur le décide
                if ('true' === $request->request->get('delete_related')) {
                    $entityManager->remove($comment);
                }
            }

            //On supprime le produit
            $entityManager->remove($post);
            //La ligne ci-dessous rend la suppression en BDD effective
            $entityManager->flush();

            //Envoi d'un message utilisateur
            $this->addFlash('success', 'L\'article a bien été supprimé.');
        }

        return $this->redirectToRoute('posts_index');
    }

    /**
     * @Route("/admin/api/posts", name="give_posts", methods={"GET"})
     */
    public function givePosts(Request $request, PostsRepository $postsRepository): JsonResponse
    {
        if ($request->isXmlHttpRequest()) {
            $token = $request->headers->get('authorization');
            if (!$this->isCsrfTokenValid('links', $token)) {
                return new JsonResponse('Unauthorized', 401);
            }
            $posts = $postsRepository->getPosts();

            for ($compt=0; $compt < count($posts->data); $compt++) { 
                $posts->data[$compt]['url']= $this->generateUrl('post', [ 'postSlug' => $posts->data[$compt]['slug']] );
            }

            return new JsonResponse($posts, 200);
        }

        return new JsonResponse('Méthode non-autorisée', 405);
    }
}
