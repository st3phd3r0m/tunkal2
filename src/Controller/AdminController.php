<?php

namespace App\Controller;

use App\Repository\CategoriesRepository;
use App\Repository\CommentsRepository;
use App\Repository\CourrielsRepository;
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
    private CourrielsRepository $courrielsRepository;

    public function __construct(CommentsRepository $commentsRepository, PostsRepository $postsRepository, UsersRepository $usersRepository, LinksRepository $linksRepository, CategoriesRepository $categoriesRepository, CourrielsRepository $courrielsRepository)
    {
        $this->commentsRepository = $commentsRepository;
        $this->postsRepository = $postsRepository;
        $this->usersRepository = $usersRepository;
        $this->linksRepository = $linksRepository;
        $this->categoriesRepository = $categoriesRepository;
        $this->courrielsRepository = $courrielsRepository;
    }

    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'nbrUsers' => count($this->usersRepository->findAll()),
            'nbrComments' => count($this->commentsRepository->findAll()),
            'nbrPosts' => count($this->postsRepository->findAll()),
            'nbrLinks' => count($this->linksRepository->findAll()),
            'nbrCategories' => count($this->categoriesRepository->findAll()),
            'nbrCourriels' => count($this->courrielsRepository->findAll()),
        ]);
    }
}
