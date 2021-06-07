import {MigrationInterface, QueryRunner} from "typeorm";

export class CartMigration1623067531160 implements MigrationInterface {
    name = 'CartMigration1623067531160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" ADD "count" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "count"`);
    }

}
