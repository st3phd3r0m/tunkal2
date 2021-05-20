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

    /**
     * Undocumented function.
     *
     * @return string
     */
    public function getClass(object $object)
    {
        return (new \ReflectionClass($object))->getShortName();
    }

    /**
     * Undocumented function.
     *
     * @return string
     */
    public function lowerCaseFirstChar(string $str)
    {
        return lcfirst($str);
    }
}
