import {MigrationInterface, QueryRunner} from "typeorm";

export class ArticlesinCategoriesMigration1619006406593 implements MigrationInterface {
    name = 'ArticlesinCategoriesMigration1619006406593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articlesInCategories" ("category_id" integer NOT NULL, "article_id" integer NOT NULL, CONSTRAINT "PK_c2d557b6a43d8b525bec33cf88d" PRIMARY KEY ("category_id", "article_id"))`);
        await queryRunner.query(`ALTER TABLE "articlesInCategories" ADD CONSTRAINT "FK_d1a61481b098b028ea0b4c300bf" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "articlesInCategories" ADD CONSTRAINT "FK_4bf7ae4e54298b6a5f08dee7ecb" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articlesInCategories" DROP CONSTRAINT "FK_4bf7ae4e54298b6a5f08dee7ecb"`);
        await queryRunner.query(`ALTER TABLE "articlesInCategories" DROP CONSTRAINT "FK_d1a61481b098b028ea0b4c300bf"`);
        await queryRunner.query(`DROP TABLE "articlesInCategories"`);
    }

}
