<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Comments;
use App\Entity\Posts;
use App\Form\CommentsType;
use App\Repository\CommentsRepository;
use App\Repository\LinksRepository;
use App\Repository\PostsRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

/**
 * @Route("/")
 */
class HomeController extends AbstractController
{
    private PostsRepository $postsRepository;
    private CommentsRepository $commentsRepository;

    public function __construct(PostsRepository $postsRepository, CommentsRepository $commentsRepository)
    {
        $this->postsRepository = $postsRepository;
        $this->commentsRepository = $commentsRepository;
    }

    /**
     * @Route("/", name="home")
     */
    public function index(LinksRepository $linksRepository): Response
    {
        $post = $this->newFirmPage('accueil');

        // $copyrightLink = $linksRepository->findBy(['position' => 'copyright'])[0];
        $mediaLinks = $linksRepository->findBy(['position' => 'media']);

        return $this->render('home/index.html.twig', [
            'post' => $post,
            'mediaLinks' => $mediaLinks,
            'copyrightLink' => '',
        ]);
    }

    /**
     * @Route("/cat/{slug}", name="category", methods={"GET"})
     */
    public function showCategory(Categories $category, PaginatorInterface $paginator, Request $request): Response
    {
        $post = $this->newFirmPage($category->getSlug());
        $posts = $paginator->paginate(
            $this->postsRepository->findBy(['category'=> $category]),
            //Le numero de la page, si aucun numero, on force la page 1
            $request->query->getInt('page', 1),
            //Nombre d'élément par page
            10
        );
        return $this->render('home/category.html.twig', [
            'posts' => $posts,
            'post' => $post,
        ]);
    }

    /**
     * @Route("/cat/{categorySlug}/post/{postSlug}", name="post", methods={"GET", "POST"})
     * @ParamConverter("post", class="App\Entity\Posts", options={"mapping": {"postSlug":"slug"}}))
     */
    public function showPost(string $categorySlug, Posts $post, Request $request): Response
    {
        // Instanciation de Comments, création formulaire commentaire
        $comment = new Comments();
        $formComment = $this->createForm(CommentsType::class, $comment);
        $formComment->handleRequest($request);

        //Soumission formulaire commentaire
        if ($formComment->isSubmitted() && $formComment->isValid()) {
            $comment->setPost($post);
            $comment->setCreatedAt(new \DateTime('now', new \DateTimeZone('Europe/Paris')));
            $comment->setIsModerated(false);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($comment);
            $entityManager->flush();

            //Envoi d'un message utilisateur
            $this->addFlash('success', 'Commentaire enregistré');

            $_route = $request->get('_route');
            return $this->redirectToRoute($_route, [
                'categorySlug'=> $categorySlug,
                'postSlug' => $post->getSlug(),
            ]);
        }

        return $this->render('home/post.html.twig', [
            'post' => $post,
            'numbOfCommentsPages' => $this->commentsRepository->getNumberOfPages($post->getSlug()),
            'form' => $formComment->createView(),
        ]);
    }

    /**
     * Fonction qui initialise les metadonnées et le contenu de publications d' "usine".
     *
     * @param string $slug
     *
     * @return Posts $post
     */
    public function newFirmPage(string $slug = null)
    {
        $post = $this->postsRepository->findOneBy(['slug' => $slug]);
        
        if (!$post) {
            $slug = ucfirst(str_replace('-', ' ', $slug));
            //Instanciation entité Posts
            $post = new Posts();
            $post->setTitle($slug);
            $post->setMetaTitle($slug);
            $post->setContent($slug);
            $post->setMetaDescription($slug);
            $keywords = [$slug];
            $post->setKeyWords($keywords);
            $post->setCreatedAt(new \DateTime('now', new \DateTimeZone('Europe/Paris')));
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($post);
            $entityManager->flush();
        }

        return $post;
    }
}
