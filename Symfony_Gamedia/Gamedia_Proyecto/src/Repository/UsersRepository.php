<?php

namespace App\Repository;

use App\Entity\Users;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;



/**
 * @method Users|null find($id, $lockMode = null, $lockVersion = null)
 * @method Users|null findOneBy(array $criteria, array $orderBy = null)
 * @method Users[]    findAll()
 * @method Users[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsersRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, EntityManagerInterface $manager)
    {
        parent::__construct($registry, Users::class);
        $this->manager = $manager;
    }

  
    
    public function saveUsers($name, $username, $password, $email)
    {
        $newUsers = new Users();

        $newUsers
            ->setName($name)
            ->setUsername($username)
            ->setPassword($password)
            ->setEmail($email);
      

        $this->manager->persist($newUsers);
        $this->manager->flush();
    }

    public function updateUsers(Users $newUsers): Users
    {
        $this->manager->persist($newUsers);
        $this->manager->flush();

        return $newUsers;
    }

    public function removeUsers(Users $newUsers): Users
    {
        $this->manager->remove($newUsers);
        $this->manager->flush();

        return $newUsers;
    }

    // /**
    //  * @return Users[] Returns an array of Users objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Users
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
