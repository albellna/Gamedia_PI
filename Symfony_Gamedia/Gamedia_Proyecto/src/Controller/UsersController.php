<?php
namespace App\Controller;
use App\Repository\UsersRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;




/**
 * Class UsersController
 * @package App\Controller
 *
 * @Route(path="/api/")
 */



class UsersController
{
    private $usersRepository;

    public function __construct(UsersRepository $usersRepository)
    {
        $this->usersRepository = $usersRepository;
    }

    

    /**
     * @Route("users", name="add_users", methods={"POST"})
     */
    public function add(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $name = $data['name'];
        $username = $data['username'];
        $password = $data['password'];
        $email = $data['email'];
        

        if ( empty($name) || empty($username) || empty($password) || empty($email)) {
            throw new NotFoundHttpException('Expecting mandatory parameters!');
        }

        $this->usersRepository->saveusers($name,$username,$password,$email);

        return new JsonResponse(['status' => 'users created!'], Response::HTTP_CREATED);
    }

    /**
     * @Route("users/{id}", name="get_one_users", methods={"GET"})
     */

    public function get($id): JsonResponse
    {
        $users = $this->usersRepository->findOneBy(['id' => $id]);

        $data = [
            'id' => $users->getId(),
            'name' => $users->getName(),
            'username' => $users->getUsername(),
            'password' => $users->getPassword(),
            'email' => $users->getEmail(),
       
        ];

        return new JsonResponse($data, Response::HTTP_OK);
    }

    /**
     * @Route("users", name="get_all_users", methods={"GET"})
     */

    public function getAll(): JsonResponse
    {
        $users = $this->usersRepository->findAll();
        $data = [];

        foreach ($users as $users) {
            $data[] = [
            'id' => $users->getId(),
            'name' => $users->getName(),
            'username' => $users->getUsername(),
            'password' => $users->getPassword(),
            'email' => $users->getEmail(),
        
            ];
        }

        return new JsonResponse($data, Response::HTTP_OK);
    }

    /**
     * @Route("users/{id}", name="update_users", methods={"PUT"})
     */

    public function update($id, Request $request): JsonResponse
    {
        $users = $this->usersRepository->findOneBy(['id' => $id]);
        $data = json_decode($request->getContent(), true);

        empty($data['name']) ? true : $users->setName($data['name']);
        empty($data['username']) ? true : $users->setUsername($data['username']);
        empty($data['password']) ? true : $users->setPassword($data['password']);
        empty($data['email']) ? true : $users->setEmail($data['email']);
 

        $updatedusers = $this->usersRepository->updateusers($users);

		return new JsonResponse(['status' => 'user updated!'], Response::HTTP_OK);
    }

    /**
     * @Route("users/{id}", name="delete_users", methods={"DELETE"})
     */

    public function delete($id): JsonResponse
    {
        $users = $this->usersRepository->findOneBy(['id' => $id]);

        $this->usersRepository->removeusers($users);

        return new JsonResponse(['status' => 'users deleted'], Response::HTTP_OK);
    }
}

?>
