<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            'class' => new TwigFunction('class', [$this, 'getClass']),
            'lcfirst' => new TwigFunction('lcfirst', [$this, 'lowerCaseFirstChar']),
        ];
    }

    public function getClass($object)
    {
        return (new \ReflectionClass($object))->getShortName();
    }

    public function lowerCaseFirstChar(string $str){
        return lcfirst($str);
    }
}
