<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ProjectController extends Controller
{
    /**
     * @Route("/project", name="app_project_show")
     */
    public function showProject()
    {
        return $this->render('project/project.html.twig');
    }
}
