import {MigrationInterface, QueryRunner} from "typeorm";

export class ArticlesInOrderMigration1618693100450 implements MigrationInterface {
    name = 'ArticlesInOrderMigration1618693100450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_8f38099e6d6bc32f3d74948959f" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_19cc2abbefe70f6e2bbdd85229d" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_19cc2abbefe70f6e2bbdd85229d"`);
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_8f38099e6d6bc32f3d74948959f"`);
    }

}
