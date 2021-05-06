import {MigrationInterface, QueryRunner} from "typeorm";

export class ArticlesMigration1618347652035 implements MigrationInterface {
    name = 'ArticlesMigration1618347652035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "price" integer NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "articles"`);
    }

}
