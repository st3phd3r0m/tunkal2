<?php

namespace App\EventSubscriber;

use App\Entity\Images;
use App\Entity\Links;
use App\Entity\Posts;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;

class DatabaseActivitySubscriber implements EventSubscriber
{
    public const IMAGE_PATH = 'images/';

    private EntityManagerInterface $entityManager;
    private Filesystem $filesystem;

    public function __construct(EntityManagerInterface $entityManager, Filesystem $filesystem)
    {
        $this->entityManager = $entityManager;
        $this->filesystem = $filesystem;
    }

    // this method can only return the event names; you cannot define a
    // custom method name to execute when each event triggers
    public function getSubscribedEvents(): array
    {
        return [
            Events::postPersist,
            Events::postUpdate,
        ];
    }

    // callback methods must be called exactly like the events they listen to;
    // they receive an argument of type LifecycleEventArgs, which gives you access
    // to both the entity object of the event and the entity manager itself
    public function postPersist(LifecycleEventArgs $args): void
    {
        $this->filterObjectsInstances($args);
    }

    public function postUpdate(LifecycleEventArgs $args): void
    {
        $this->filterObjectsInstances($args);
    }

    public function filterObjectsInstances(LifecycleEventArgs $arg): void
    {
        $object = $arg->getObject();

        if ($object instanceof Links) {
            $this->treatLinksInstances($object);
        }

        if ($object instanceof Posts) {
            $this->treatPostsInstances($object);
        }
    }

    public function treatPostsInstances(Posts $object): void
    {

        $images = $object->getImages();

        foreach ($images as $key => $image) {

            $filename = $image->getName();

            if (null == $filename || pathinfo($filename)['extension'] === 'webp') {
                continue;
            }

            if ($this->convertImageFileToWebp($filename)) {
                $this->updateImageInstanceToWebp($image, pathinfo($filename)['extension'], $filename);
                $this->deleteNonWebpFile($filename);
            }
        }

    }

    public function treatLinksInstances(Links $object): void
    {
        $filename = $object->getImage();
        
        if (null == $filename || pathinfo($filename)['extension'] === 'webp') {
            return;
        }

        if ($this->convertImageFileToWebp($filename)) {
            $this->updateLinkInstanceToWebp($object, pathinfo($filename)['extension'], $filename);
            $this->deleteNonWebpFile($filename);
        }
    }


    public function deleteNonWebpFile(string $filename): void
    {
        $this->filesystem->remove(self::IMAGE_PATH . $filename);
    }

    /**
     * Undocumented function
     *
     * @param Links $object
     * @param string $file_extension
     * @param string $filename
     * @return void
     */
    public function updateLinkInstanceToWebp(Links $object, string $file_extension, string $filename): void
    {
        $object->setImage(str_replace($file_extension, 'webp', $filename));
        $this->entityManager->flush();
    }

    public function updateImageInstanceToWebp(Images $object, string $file_extension, string $filename): void
    {
        $object->setName(str_replace($file_extension, 'webp', $filename));
        $this->entityManager->flush();
    }

    public function convertImageFileToWebp(string $filename)
    {
        $file_extension = pathinfo($filename)['extension'];
        $filename = self::IMAGE_PATH . $filename;

        switch ($file_extension) {
            case 'png':
                $image = imagecreatefrompng($filename);
                break;
            case 'jpeg':
                $image = imagecreatefromjpeg($filename);
                break;
            case 'jpg':
                $image = imagecreatefromjpeg($filename);
                break;
            default:
                return false;
        }

        if (
            imagepalettetotruecolor($image) &&
            imagealphablending($image, true) &&
            imagesavealpha($image, true)
        ) {
            return imagewebp($image, str_replace($file_extension, 'webp', $filename), 100);
        }

        return false;
    }
}
