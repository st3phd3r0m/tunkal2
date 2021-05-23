<?php

namespace App\Repository;

use App\Entity\Links;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Links|null find($id, $lockMode = null, $lockVersion = null)
 * @method Links|null findOneBy(array $criteria, array $orderBy = null)
 * @method Links[]    findAll()
 * @method Links[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LinksRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Links::class);
    }

    /**
     * @return Links[] Returns an array of Links objects
     */
    public function findActiveLinks()
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.is_active != 0')
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * Undocumented function
     *
     * @return array<int, array<string, string>>
     */
    public function getCategoriesUrls(){
        $dql = 'SELECT l.url FROM links as l'
            .' WHERE l.type = "category" AND l.is_active = true';
        $conn = $this->getEntityManager()->getConnection();
        $stmt = $conn->executeQuery($dql);
        $result = $stmt->fetchAllAssociative();
        $conn->close();

        return $result;
    }

    /*
    public function findOneBySomeField($value): ?Links
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
