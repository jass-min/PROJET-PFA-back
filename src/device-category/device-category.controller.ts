import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceCategoryService } from './device-category.service';
import { CreateDeviceCategoryDto } from './dto/create-device-category.dto';
import { UpdateDeviceCategoryDto } from './dto/update-device-category.dto';
import { DeviceCategory } from './entities/device-category.entity';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("device-categories")
@Controller('device-categories')
export class DeviceCategoryController {
  constructor(private readonly deviceCategoryService: DeviceCategoryService) {}


  @Post()
  createDeviceCategory(@Body() createDeviceCategoryDto: CreateDeviceCategoryDto) {
    return this.deviceCategoryService.create(createDeviceCategoryDto);
  }


  @Get()
   async getCategoryNameDevice(): Promise<DeviceCategory[]>{
     return await this.deviceCategoryService.findAll();
   }



   @Get(":id")
   async getDviceCateoryById(@Param("id") DeviceCategoryId:number):Promise<DeviceCategory>{
    return await this.deviceCategoryService.findOne(DeviceCategoryId);
  }



  @Patch(':id')
  updateDeviceCategory (@Param('id') DeviceCategoryId:number, @Body() updateDeviceCategoryDto: UpdateDeviceCategoryDto) {
    return this.deviceCategoryService.update(DeviceCategoryId, updateDeviceCategoryDto);
  }



  @Delete(':id')
  removeDeviceCategory (@Param('id') DeviceCategoryId:number) {
    return this.deviceCategoryService.remove(DeviceCategoryId);
  }
}
