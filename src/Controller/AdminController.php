<?php

namespace App\Controller;

use App\Repository\CategoriesRepository;
use App\Repository\CommentsRepository;
use App\Repository\LinksRepository;
use App\Repository\PostsRepository;
use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    private CommentsRepository $commentsRepository;
    private PostsRepository $postsRepository;
    private UsersRepository $usersRepository;
    private LinksRepository $linksRepository;
    private CategoriesRepository $categoriesRepository;

    public function __construct(CommentsRepository $commentsRepository, PostsRepository $postsRepository, UsersRepository $usersRepository, LinksRepository $linksRepository, CategoriesRepository $categoriesRepository)
    {
        $this->commentsRepository = $commentsRepository;
        $this->postsRepository = $postsRepository;
        $this->usersRepository = $usersRepository;
        $this->linksRepository = $linksRepository;
        $this->categoriesRepository = $categoriesRepository;
    }

    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        $nbrPosts = count($this->postsRepository->findAll());
        $nbrCategories = count($this->categoriesRepository->findAll());
        $nbrComments = count($this->commentsRepository->findAll());
        $nbrUsers = count($this->usersRepository->findAll());
        $nbrLinks = count($this->linksRepository->findAll());

        return $this->render('admin/index.html.twig', [
            'nbrUsers' => $nbrUsers,
            'nbrComments' => $nbrComments,
            'nbrPosts' => $nbrPosts,
            'nbrLinks' => $nbrLinks,
            'nbrCategories' => $nbrCategories,
        ]);
    }
}
