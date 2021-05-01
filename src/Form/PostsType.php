<?php

namespace App\Form;

use App\Entity\Categories;
use App\Entity\Posts;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class PostsType extends AbstractType
{
    /**
     * Undocumented function.
     *
     * @param array<string, mixed> $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $firmSlugs = [
            'accueil',
            'news',
            'previous-concerts',
            'upcoming-concerts',
        ];

        $builder
            ->add('title', TextType::class, [
                'required' => true,
                'label' => 'Titre de l\'article : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un titre.',
                    ]),
                ],
            ])
            ->add('content', TextareaType::class, [
                // 'config_name' => 'main_config',
                'required' => true,
                'label' => 'Description/contenu de l\'article : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir la description de l\'article',
                    ]),
                ],
            ])
            ->add('metaTitle', TextType::class, [
                'required' => true,
                'label' => 'Titre méta-donnée de l\'article : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un titre.',
                    ]),
                    new Length([
                        'min' => 50,
                        'minMessage' => 'Le titre doit comporter au minimum {{ limit }} caractères.',
                        'max' => 70,
                        'maxMessage' => 'Le titre doit comporter au maximum {{ limit }} caractères.',
                    ]),
                ],
            ])
            ->add('metaDescription', TextareaType::class, [
                'required' => true,
                'label' => 'Description méta-donnée de l\'article : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une description.',
                    ]),
                    new Length([
                        'min' => 150,
                        'minMessage' => 'La description doit comporter au minimum {{ limit }} caractères.',
                        'max' => 200,
                        'maxMessage' => 'La description doit comporter au maximum {{ limit }} caractères.',
                    ]),
                ],
            ])
            ->add('keywords', TextType::class, [
                'required' => false,
                'label' => 'Ajouter des mots-clés, délimités par des hashtags ("#"), afin de référencer votre produit : ',
                'mapped' => false,
                'data' => (null != $builder->getData()->getKeywords()) ? implode('#', $builder->getData()->getKeywords()) : '',
            ])
            
            ->add('images', CollectionType::class, [
                'required' => false,
                'label' => 'Images d\'illustration',
                'entry_type' => ImagesType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true,
                'by_reference' => false,
            ])
            ->add('category', EntityType::class, [
                'label' => 'Catégorie de l\'article',
                'class'=> Categories::class,
                'choice_label'=>'name'
            ])
            ->add('concert_location', TextType::class, [
                'required' => false,
                'label' => 'Où  aura lieu le concert ?',
            ]
            )
            ->add('concert_expected_at', DateType::class, [
                'required' => false,
                'label' => 'Date du concert',
                'widget' => 'single_text',
                'constraints' => [
                    new DateTime([
                        'message' => 'La date est invalide',
                    ]),
                ],
            ]);
        if (!in_array($options['data']->getSlug(), $firmSlugs)) {
            $builder->add('slug', TextType::class, [
                        'required' => false,
                        'label' => 'titre ("slug") en barre d\'url : ',
                        // 'constraints' => [
                        //     new NotBlank([
                        //         'message' => 'Veuillez saisir un slug.',
                        //     ])
                        // ]
                    ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Posts::class,
        ]);
    }
}
