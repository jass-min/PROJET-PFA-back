import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from './entities/device.entity';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { DeviceCategoryService } from 'src/device-category/device-category.service';
import { MeasuresService } from 'src/measures/measures.service';


@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,private readonly categoryService: DeviceCategoryService,
  ) {}

   async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    // step1: create device object without relations 
    const device = this.deviceRepository.create(createDeviceDto);
    //step2: inject device category into device
    device.deviceCategory= await this.categoryService.findOne(createDeviceDto.categoryId)
    //step3: save data in database
    return this.deviceRepository.save(device);
  }

  findAll(): Promise<Device[]> {
    return this.deviceRepository.find({ relations: ['measures'] });
  }

  async findOne(id: number): Promise<Device> {
    return this.deviceRepository.findOne({
      where: { id },
      relations: ['measures', 'deviceCategory'],
    });
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    const device = await this.deviceRepository.preload({
      id,
      ...updateDeviceDto,
    });
    if (!device) {
      throw new Error(`Device with ID ${id} not found`);
    }
    return this.deviceRepository.save(device);
  }

  
  async remove(id: number): Promise<void> {
    await this.deviceRepository.delete(id);
  }
}
