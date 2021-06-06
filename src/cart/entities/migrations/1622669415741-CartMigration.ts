import {MigrationInterface, QueryRunner} from "typeorm";

export class CartMigration1622669415741 implements MigrationInterface {
    name = 'CartMigration1622669415741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE "cart_id_seq" OWNED BY "cart"."id"`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "id" SET DEFAULT nextval('cart_id_seq')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "cart_id_seq"`);
    }

}
