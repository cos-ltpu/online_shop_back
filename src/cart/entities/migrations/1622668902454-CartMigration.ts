import {MigrationInterface, QueryRunner} from "typeorm";

export class CartMigration1622668902454 implements MigrationInterface {
    name = 'CartMigration1622668902454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cart" ("id" integer NOT NULL, "user_id" integer NOT NULL, "article_id" integer NOT NULL, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cart"`);
    }

}
