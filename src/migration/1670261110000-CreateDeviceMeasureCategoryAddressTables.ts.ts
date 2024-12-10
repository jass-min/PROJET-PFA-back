import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDeviceMeasureCategoryAddressTables
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create DeviceCategory table
    await queryRunner.query(`
            CREATE TABLE "device_category" (
                "id" SERIAL PRIMARY KEY,
                "category_name" VARCHAR NOT NULL
            );
        `);

    // Create Device table with a foreign key to DeviceCategory
    await queryRunner.query(`
            CREATE TABLE "device" (
                "id" SERIAL PRIMARY KEY,
                "device_name" VARCHAR NOT NULL,
                "reference_number" VARCHAR NOT NULL,
                "device_category_id" INTEGER,
                CONSTRAINT "FK_device_category" FOREIGN KEY ("device_category_id") REFERENCES "device_category"("id")
            );
        `);

    // Create Address table
    await queryRunner.query(`
            CREATE TABLE "address" (
                "id" SERIAL PRIMARY KEY,
                "latitude" DOUBLE PRECISION NOT NULL,
                "longitude" DOUBLE PRECISION NOT NULL,
                "city" VARCHAR NOT NULL,
                "country" VARCHAR NOT NULL,
                "province" VARCHAR NOT NULL
            );
        `);

    // Create Measure table with foreign keys to Device and a OneToOne to Address
    await queryRunner.query(`
            CREATE TABLE "measure" (
                "id" SERIAL PRIMARY KEY,
                "quantity" INTEGER DEFAULT 1,
                "device_id" INTEGER NOT NULL,
                "address_id" INTEGER UNIQUE,
                CONSTRAINT "FK_measure_device" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE CASCADE,
                CONSTRAINT "FK_measure_address" FOREIGN KEY ("address_id") REFERENCES "address"("id")
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "measure";');
    await queryRunner.query('DROP TABLE "device";');
    await queryRunner.query('DROP TABLE "address";');
    await queryRunner.query('DROP TABLE "device_category";');
  }
}
