<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Comments;
use App\Entity\Courriels;
use App\Entity\Posts;
use App\Form\CommentsType;
use App\Form\CourrielsType;
use App\Repository\CategoriesRepository;
use App\Repository\CommentsRepository;
use App\Repository\LinksRepository;
use App\Repository\PostsRepository;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @Route("/")
 */
class HomeController extends AbstractController
{
    private PostsRepository $postsRepository;
    private CommentsRepository $commentsRepository;
    private LinksRepository $linksRepository;
    private CategoriesRepository $categoriesRepository;

    public function __construct(PostsRepository $postsRepository, CommentsRepository $commentsRepository, LinksRepository $linksRepository, CategoriesRepository $categoriesRepository)
    {
        $this->postsRepository = $postsRepository;
        $this->commentsRepository = $commentsRepository;
        $this->linksRepository = $linksRepository;
        $this->categoriesRepository = $categoriesRepository;
    }

    /**
     * @Route("/", name="home")
     */
    public function index(): Response
    {
        $post = $this->newFirmPage('accueil');

        return $this->render('home/index.html.twig', [
            'post' => $post,
        ]);
    }

    /**
     * @Route("/contact", name="contact", methods={"GET", "POST"})
     */
    public function contact(Request $request): Response
    {
        $post = $this->newFirmPage('contact');

        // Instanciation de Comments, création formulaire commentaire
        $courriel = new Courriels();
        $formComment = $this->createForm(CourrielsType::class, $courriel);
        $formComment->handleRequest($request);

        //Soumission formulaire commentaire
        if ($formComment->isSubmitted() && $formComment->isValid()) {
            $courriel->setSentAt(new \DateTime('now', new \DateTimeZone('Europe/Paris')));

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($courriel);
            $entityManager->flush();

            //Envoi d'un message utilisateur
            $this->addFlash('commentSuccess', 'Message enregistré');
        }

        return $this->render('home/contact.html.twig', [
            'post' => $post,
            'form' => $formComment->createView(),
        ]);
    }

    /**
     * @Route("/sitemap.xml", name="sitemap", methods={"GET"}, defaults={"_format"="xml"})
     *
     */
    public function showSitemap(Request $request): Response
    {
        $hostname = $request->getSchemeAndHttpHost();
        $post = $this->postsRepository->findOneBy(['slug'=>'accueil']);
        $urls[] = [
            'loc' =>  $this->generateUrl('home'), 
            'lastmod' => $post->getCreatedAt()->format('Y-m-d'),
            'image' => $post->getImages()->first(),
            'title' => $post->getMetaTitle(), 
        ];

        $categories = $this->categoriesRepository->findAll();
        foreach ($categories as $category) {
            $post = $this->postsRepository->findOneBy(['slug'=> $category->getSlug() ]);
            $urls[] = [
                'loc' =>  $this->generateUrl('category', [ 'slug' => $category->getSlug()] ) ,
                'lastmod' => $post->getCreatedAt()->format('Y-m-d'),
                'image' => $post->getImages()->first(),
                'title' => $post->getMetaTitle()
            ];
            $posts = $this->postsRepository->findBy(['category' => $category]);
            foreach ($posts as $post) {
                $urls[] = [
                    'loc' =>  $this->generateUrl('catpost', [
                        'categorySlug' => $category->getSlug(),
                        'postSlug' => $post->getSlug()
                        ]),
                    'lastmod' => $post->getCreatedAt()->format('Y-m-d'),
                    'image' => $post->getImages()->first(),
                    'title' => $post->getMetaTitle(),
                ];
            }
        }
        
        return $this->render('home/sitemap.xml.twig', [
            'hostname' => $hostname,
            'urls' => $urls
        ]);
    }

    /**
     * @Route("/{_locale}/{slug}", name="category", methods={"GET"}, requirements={"_locale": "fr_FR" })
     */
    public function showCategory(Categories $category, PaginatorInterface $paginator, Request $request): Response
    {
        $post = $this->newFirmPage($category->getSlug());
        $posts = $paginator->paginate(
            $this->postsRepository->findBy(['category' => $category]),
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
     * @Route("/{_locale}/{categorySlug}/{postSlug}", name="catpost", methods={"GET", "POST"}, requirements={"_locale": "fr_FR" })
     * @ParamConverter("post", class="App\Entity\Posts", options={"mapping": {"postSlug":"slug"}}))
     */
    public function showPost(string $categorySlug = null, Posts $post, Request $request): Response
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
            $this->addFlash('commentSuccess', 'Commentaire enregistré');

            $_route = $request->get('_route');

            return $this->redirectToRoute($_route, [
                'categorySlug' => $categorySlug,
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
