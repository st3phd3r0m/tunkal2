<?php

namespace App\Form;

use App\Entity\Links;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\NotBlank;
use Vich\UploaderBundle\Form\Type\VichImageType;

class LinksType extends AbstractType
{
    /**
     * Undocumented function.
     *
     * @param array<string, mixed> $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('position', ChoiceType::class, [
                'label' => 'Où voulez-vous placer le lien ?',
                'choices' => [
                    'Réseaux sociaux (haut de page)' => 'socnet',
                    'Barre de navigation (haut de page)' => 'nav',
                    'Zone des médias audio/vidéo' => 'media',
                    'copyright' => 'copyright',
                    'Bas de page (footer)' => 'footer',
                    'Bannière (haut de page)' => 'banner',
                    'x-icon (head)' => 'xicon',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une position pour le lien',
                    ]),
                ],
            ])
            ->add('position_order', NumberType::class, [
                'required' => true,
                'label' => 'Ordre d\'apparition du lien ? (Saisir un chiffre. Du plus petit au plus grand : liens de la gauche vers la droite)',
                'html5' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un nombre entier',
                    ]),
                ],
            ])
            ->add('title', TextType::class, [
                'required' => true,
                'label' => 'Titre du lien (Visible lors du survol de la souris sur le lien) : ',

                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un titre.',
                    ]),
                ],
            ])
            ->add('content', TextType::class, [
                'required' => true,
                'label' => 'Texte du lien (Contenu directement visible à l\'écran) : ',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir le contenu du lien',
                    ]),
                ],
            ])
            ->add('type', ChoiceType::class, [
                'required' => true,
                'label' => 'Type de lien à ajouter',
                'choices' => [
                    'Lien sortant (ou page de contact)' => 'external',
                    'Catégorie' => 'category',
                    'Article' => 'post',
                    'Bannière (haut de page)' => 'banner',
                    'x-icon (head)' => 'xicon',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez choisir un type de lien',
                    ]),
                ],
            ])
            ->add('url', TextType::class, [
                'required' => true,
                'label' => 'Url du lien',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir l\'url du lien',
                    ]),
                ],
            ])
            ->add('imageFile', VichImageType::class, [
                'required' => false,
                'label' => 'Choisir une icône',
                'download_uri' => false,
                'imagine_pattern' => 'min300',
                'constraints' => [
                    new Image([
                        'maxSize' => '2M',
                        'maxSizeMessage' => 'Votre image dépasse les 2Mo',
                        'mimeTypes' => ['image/webp', 'image/png', 'image/jpeg', 'image/vnd.microsoft.icon'],
                        'mimeTypesMessage' => 'Votre image doit être de type webp',
                    ]),
                ],
            ])
            ->add('image_alt', TextType::class, [
                'required' => false,
                'label' => 'Texte alternatif : ',
            ])
            ->add('is_active', ChoiceType::class, [
                'required' => true,
                'label' => 'Lien actif ?',
                'choices' => [
                    'Oui' => 1,
                    'Non' => 0,
                ],
            ])
            ->add('uploaded_at', DateType::class, [
                'required' => false,
                'label' => 'Date téléchargement vidéo',
                'widget' => 'single_text',
                'constraints' => [
                    new DateTime([
                        'message' => 'La date est invalide',
                    ]),
                ],
            ])
            ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Links::class,
        ]);
    }
}
