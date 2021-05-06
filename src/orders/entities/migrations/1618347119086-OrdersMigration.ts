import {MigrationInterface, QueryRunner} from "typeorm";

export class OrdersMigration1618347119086 implements MigrationInterface {
    name = 'OrdersMigration1618347119086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "surname" character varying NOT NULL, "user_id" integer NOT NULL, "phone" character varying NOT NULL, "address" character varying NOT NULL, "price" integer NOT NULL, "count" integer NOT NULL, "date" character varying NOT NULL, "status" integer NOT NULL, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
