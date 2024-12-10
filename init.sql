DROP TABLE IF EXISTS "measure" CASCADE;
DROP TABLE IF EXISTS "device" CASCADE;
DROP TABLE IF EXISTS "address" CASCADE;
DROP TABLE IF EXISTS "device_category" CASCADE;

-- Create the device_category table
CREATE TABLE "device_category" (
    "id" SERIAL PRIMARY KEY,
    "category_name" VARCHAR NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the device table with a foreign key to device_category
CREATE TABLE "device" (
    "id" SERIAL PRIMARY KEY,
    "device_name" VARCHAR NOT NULL,
    "reference_number" VARCHAR NOT NULL,
    "device_category_id" INTEGER,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FK_device_category" FOREIGN KEY ("device_category_id") REFERENCES "device_category"("id") ON DELETE SET NULL
);

-- Create the address table
CREATE TABLE "address" (
    "id" SERIAL PRIMARY KEY,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "city" VARCHAR NOT NULL,
    "country" VARCHAR NOT NULL,
    "province" VARCHAR NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the measure table with foreign keys to device and address
CREATE TABLE IF NOT EXISTS "measure" (
    "id" SERIAL PRIMARY KEY,
    "quantity" INTEGER DEFAULT 1,
    "device_id" INTEGER NOT NULL,
    "address_id" INTEGER UNIQUE,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FK_measure_device" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE CASCADE,
    CONSTRAINT "FK_measure_address" FOREIGN KEY ("address_id") REFERENCES "address"("id")
);