import { Address } from 'src/address/entities/address.entity';
import { DeviceCategory } from 'src/device-category/entities/device-category.entity';
import { Device } from 'src/devices/entities/device.entity';
import { Measure } from 'src/measures/entities/measure.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: 'admin',
  password: 'admin',
  database: 'db',
  synchronize: true,
  logging: false,
  migrations: [__dirname + '../migration/**/*{ts,.js}'],
  entities: [Device, Measure, Address, DeviceCategory],
  ssl: false,
});
