<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PortfolioController extends Controller
{
    /**
     * @Route("/portfolio", name="app_portfolio_show")
     */
    public function showPortfolio()
    {
        return $this->render('portfolio/portfolio.html.twig');
    }
}
