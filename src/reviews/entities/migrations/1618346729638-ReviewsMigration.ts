import {MigrationInterface, QueryRunner} from "typeorm";

export class ReviewsMigration1618346729638 implements MigrationInterface {
    name = 'ReviewsMigration1618346729638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reviews" ("id" SERIAL NOT NULL, "author_id" integer NOT NULL, "article_id" integer NOT NULL, "grade" integer NOT NULL, "content" character varying, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reviews"`);
    }

}
