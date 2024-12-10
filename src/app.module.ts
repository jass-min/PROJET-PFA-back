import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { DeviceCategoryModule } from './device-category/device-category.module';
import { DevicesModule } from './devices/devices.module';
import { MeasuresModule } from './measures/measures.module';
import { Address } from './address/entities/address.entity';
import { Device } from './devices/entities/device.entity';
import { Measure } from './measures/entities/measure.entity';
import { DeviceCategory } from './device-category/entities/device-category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,  // Should be 'carbon-postgres' as per your updated .env
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: 'root',
      password: 'secret',
      database: 'carbon-db',
      autoLoadEntities: true,
      entities: [Device,Address,Measure,DeviceCategory],
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true', // Sync based on .env
    }),
    AddressModule,
    DeviceCategoryModule,
    DevicesModule,
    MeasuresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
