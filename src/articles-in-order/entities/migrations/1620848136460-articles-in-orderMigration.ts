import {MigrationInterface, QueryRunner} from "typeorm";

export class articlesInOrderMigration1620848136460 implements MigrationInterface {
    name = 'articlesInOrderMigration1620848136460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articlesInOrder" ("order_id" integer NOT NULL, "article_id" integer NOT NULL, "count" integer NOT NULL, CONSTRAINT "FK_b3fc5db205498dca33bab09fff6" PRIMARY KEY ("order_id", "article_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "articlesInOrder"`);
    }

}
