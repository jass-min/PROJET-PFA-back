import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { ApiTags } from '@nestjs/swagger';
import { Device } from './entities/device.entity';


@ApiTags("devices")
@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DeviceService) {}

  @Post()
  createDevice (@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  async getDevices():Promise<Device[]>{
    return this.devicesService.findAll();
  }


  @Get(':id')
  async getOneDevice(@Param('id') DeviceId:number):Promise<Device>{
    return await this.devicesService.findOne(DeviceId);
  }


  @Patch(':id')
  updateDevice(@Param('id')DeviceId: number, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(DeviceId, updateDeviceDto);
  }

  
  @Delete(':id')
  removeDevice(@Param('id')DeviceId: number) {
    return this.devicesService.remove(DeviceId);
  }
}
