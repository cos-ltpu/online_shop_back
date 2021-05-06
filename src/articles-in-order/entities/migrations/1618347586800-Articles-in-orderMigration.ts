import {MigrationInterface, QueryRunner} from "typeorm";

export class ArticlesInOrderMigration1618347586800 implements MigrationInterface {
    name = 'ArticlesInOrderMigration1618347586800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles-in-order" ("order_id" integer NOT NULL, "article_id" integer NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_31e7af513a881cc815139e6b17b" PRIMARY KEY ("order_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "articles-in-order"`);
    }

}
