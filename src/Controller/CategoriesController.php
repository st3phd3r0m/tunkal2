<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Links;
use App\Form\CategoriesType;
use App\Repository\CategoriesRepository;
use App\Repository\LinksRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoriesController extends AbstractController
{
    private LinksRepository $linksRepository;

    public function __construct(LinksRepository $linksRepository)
    {
        $this->linksRepository = $linksRepository;
    }

    /**
     * @Route("/admin/categories/", name="categories_index", methods={"GET"})
     */
    public function index(CategoriesRepository $categoriesRepository): Response
    {
        return $this->render('categories/index.html.twig', [
            'categories' => $categoriesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/admin/categories/new", name="categories_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $category = new Categories();
        $form = $this->createForm(CategoriesType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($category);
            $entityManager->flush();
            $this->newLink($category);
            //Envoi d'un message utilisateur
            $this->addFlash('success', 'La catégorie a bien été créée.');
            $this->addFlash('success', 'Le lien correspondant a bien été créé.');

            return $this->redirectToRoute('categories_index');
        }

        return $this->render('categories/new.html.twig', [
            'category' => $category,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/categories/{id}/edit", name="categories_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Categories $category): Response
    {
        $form = $this->createForm(CategoriesType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            //Envoi d'un message utilisateur
            $this->addFlash('success', 'La catégorie a bien été modifiée.');

            return $this->redirectToRoute('categories_index');
        }

        return $this->render('categories/edit.html.twig', [
            'category' => $category,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/categories/{id}", name="categories_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Categories $category): Response
    {
        if ($this->isCsrfTokenValid('delete'.$category->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            //Articles associés à la catégorie
            $posts = $category->getPosts();
            foreach ($posts as $post) {
                //Rupture entre les commentaires et le produit
                $category->removePost($post);
            }
            $entityManager->remove($category);
            $entityManager->flush();
            //Supression du lien correspondant
            $this->removeLink($category);

            //Envoi d'un message utilisateur
            $this->addFlash('success', 'La catégorie a bien été supprimée');
            $this->addFlash('success', 'Le lien correspondant a bien été supprimé');
        }

        return $this->redirectToRoute('categories_index');
    }

    public function newLink(Categories $category): void
    {
        $entityManager = $this->getDoctrine()->getManager();
        $link = new Links();
        $link->setUrl('/cat/'.$category->getSlug());
        $link->setType('category');
        $link->setTitle($category->getName());
        $link->setContent($category->getName());
        $link->setIsActive(false);
        $link->setUpdatedAt(new \DateTime('now', new \DateTimeZone('Europe/Paris')));
        $entityManager->persist($link);
        $entityManager->flush();
    }

    public function removeLink(Categories $category): void
    {
        $link = $this->linksRepository->findOneBy(['url' => '/cat/'.$category->getSlug()]);
        if ($link) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($link);
            $entityManager->flush();
        }
    }

    /**
     * @Route("/admin/api/categories", name="give_categories", methods={"GET"})
     */
    public function giveCategories(Request $request, CategoriesRepository $categoriesRepository): JsonResponse
    {
        if ($request->isXmlHttpRequest()) {
            $token = $request->headers->get('authorization');
            if (!$this->isCsrfTokenValid('links', $token)) {
                return new JsonResponse('Unauthorized', 401);
            }
            $categories = $categoriesRepository->getCategories();

            for ($compt=0; $compt < count($categories->data); $compt++) { 
                $categories->data[$compt]['url']= $this->generateUrl('category', [ 'slug' => $categories->data[$compt]['slug']] );
            }

            return new JsonResponse($categories, 200);
        }

        return new JsonResponse('Méthode non-autorisée', 405);
    }
}
