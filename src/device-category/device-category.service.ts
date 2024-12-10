import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceCategory } from './entities/device-category.entity';
import { CreateDeviceCategoryDto } from './dto/create-device-category.dto';
import { UpdateDeviceCategoryDto } from './dto/update-device-category.dto';

@Injectable()
export class DeviceCategoryService {
  constructor(
    @InjectRepository(DeviceCategory)
    private deviceCategoryRepository: Repository<DeviceCategory>,
  ) {}

  create(createDeviceCategoryDto: CreateDeviceCategoryDto): Promise<DeviceCategory> {
    const deviceCategory = this.deviceCategoryRepository.create(createDeviceCategoryDto);
    return this.deviceCategoryRepository.save(deviceCategory);
  }

  async findAll(): Promise<DeviceCategory[]> {
    return await this.deviceCategoryRepository.find();
  }

  async findOne(id: number): Promise<DeviceCategory> {
    return await this.deviceCategoryRepository.findOneBy({ id });
  }

  async update(id: number, updateDeviceCategoryDto: UpdateDeviceCategoryDto): Promise<DeviceCategory> {
    await this.deviceCategoryRepository.update(id, updateDeviceCategoryDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.deviceCategoryRepository.delete(id);
  }
}
