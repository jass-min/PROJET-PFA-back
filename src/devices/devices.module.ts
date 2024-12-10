import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceService } from './devices.service';
import { DevicesController } from './devices.controller';
import { Device } from './entities/device.entity';
import { DeviceCategoryModule } from 'src/device-category/device-category.module';
import { MeasuresModule } from 'src/measures/measures.module';

@Module({
  imports: [TypeOrmModule.forFeature([Device]),DeviceCategoryModule,
  ],
  controllers: [DevicesController],
  providers: [DeviceService],
  exports: [DeviceService],
})
export class DevicesModule {}
