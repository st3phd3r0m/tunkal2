<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210430180602 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categories (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comments (id INT AUTO_INCREMENT NOT NULL, post_id INT DEFAULT NULL, pseudo VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, is_moderated TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_5F9E962A4B89032C (post_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE images (id INT AUTO_INCREMENT NOT NULL, post_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_E01FBE6A4B89032C (post_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE links (id INT AUTO_INCREMENT NOT NULL, url VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, content VARCHAR(255) NOT NULL, image VARCHAR(255) DEFAULT NULL, image_alt VARCHAR(255) DEFAULT NULL, type VARCHAR(255) DEFAULT NULL, position VARCHAR(255) DEFAULT NULL, position_order INT DEFAULT NULL, updated_at DATETIME NOT NULL, is_active TINYINT(1) DEFAULT NULL, uploaded_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE posts (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, meta_description LONGTEXT NOT NULL, keywords LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', created_at DATETIME NOT NULL, slug VARCHAR(255) DEFAULT NULL, concert_location VARCHAR(255) DEFAULT NULL, concert_expected_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_885DBAFA989D9B62 (slug), INDEX IDX_885DBAFA12469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_1483A5E9E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE comments ADD CONSTRAINT FK_5F9E962A4B89032C FOREIGN KEY (post_id) REFERENCES posts (id)');
        $this->addSql('ALTER TABLE images ADD CONSTRAINT FK_E01FBE6A4B89032C FOREIGN KEY (post_id) REFERENCES posts (id)');
        $this->addSql('ALTER TABLE posts ADD CONSTRAINT FK_885DBAFA12469DE2 FOREIGN KEY (category_id) REFERENCES categories (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE posts DROP FOREIGN KEY FK_885DBAFA12469DE2');
        $this->addSql('ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962A4B89032C');
        $this->addSql('ALTER TABLE images DROP FOREIGN KEY FK_E01FBE6A4B89032C');
        $this->addSql('DROP TABLE categories');
        $this->addSql('DROP TABLE comments');
        $this->addSql('DROP TABLE images');
        $this->addSql('DROP TABLE links');
        $this->addSql('DROP TABLE posts');
        $this->addSql('DROP TABLE users');
    }
}
