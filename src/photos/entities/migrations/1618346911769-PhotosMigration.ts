import {MigrationInterface, QueryRunner} from "typeorm";

export class PhotosMigration1618346911769 implements MigrationInterface {
    name = 'PhotosMigration1618346911769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photos" ("id" SERIAL NOT NULL, "article_id" integer NOT NULL, "photo" character varying NOT NULL, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "photos"`);
    }

}
