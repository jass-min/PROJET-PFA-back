import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceCategoryService } from './device-category.service';
import { DeviceCategoryController } from './device-category.controller';
import { DeviceCategory } from './entities/device-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceCategory])],
  controllers: [DeviceCategoryController],
  providers: [DeviceCategoryService]
  ,exports:[DeviceCategoryService] //make device category module exportable to be used in other modules step1: export service step2: add device category module in device module step3: inject device category service in device service constructor(dependancy injection)
})
export class DeviceCategoryModule {}
