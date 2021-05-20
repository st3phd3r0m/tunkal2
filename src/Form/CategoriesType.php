<?php

namespace App\Form;

use App\Entity\Categories;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class CategoriesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): Void
    {
        $builder
            ->add('name', TextType::class, [
                'required' => true,
                'label' => 'Nom de catégorie : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un nom de catégorie.',
                    ]),
                ],
            ])
            ->add('slug', TextType::class, [
                'required' => false,
                'label' => 'titre ("slug") en barre d\'url : ',
                // 'constraints' => [
                //     new NotBlank([
                //         'message' => 'Veuillez saisir un slug.',
                //     ])
                // ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): Void
    {
        $resolver->setDefaults([
            'data_class' => Categories::class,
        ]);
    }
}
