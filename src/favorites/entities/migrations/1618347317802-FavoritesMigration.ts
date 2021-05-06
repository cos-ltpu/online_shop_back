import {MigrationInterface, QueryRunner} from "typeorm";

export class FavoritesMigration1618347317802 implements MigrationInterface {
    name = 'FavoritesMigration1618347317802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorites" ("user_id" integer NOT NULL, "article_id" integer NOT NULL, CONSTRAINT "PK_0d2b1e08e4e234e10a0e5ff5fc5" PRIMARY KEY ("article_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "favorites"`);
    }

}
