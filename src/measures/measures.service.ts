import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';
import { Measure } from './entities/measure.entity';
import { AddressService } from 'src/address/address.service';
import { DeviceService } from 'src/devices/devices.service';

@Injectable()
export class MeasuresService {
  constructor(
    @InjectRepository(Measure)
    private measuresRepository: Repository<Measure>,
    private readonly addressService: AddressService,
    private readonly deviceService: DeviceService
  ) {}

  async create(createMeasureDto: CreateMeasureDto): Promise<Measure> {
    const measure = await this.measuresRepository.create(createMeasureDto);
    // Créer et associer l'adresse
    measure.address = await this.addressService.create(createMeasureDto.address);

    measure.device = await this.deviceService.findOne(createMeasureDto.deviceId);

    return this.measuresRepository.save(measure);
  }

  findAll(): Promise<Measure[]> {
    return this.measuresRepository.find({ relations: ['device', 'address'] });
  }

  async findOne(id: number): Promise<Measure> {
    return this.measuresRepository.findOne({
      where: { id },
      relations: ['device', 'address'],
    });
  }

  async update(id: number, updateMeasureDto: UpdateMeasureDto): Promise<Measure> {
    const measure = await this.findOne(id);

    if (!measure) {
      throw new Error(`Measure with ID ${id} not found`);
    }

    if (updateMeasureDto.address) {
      measure.address = await this.addressService.update(measure.address.id, updateMeasureDto.address);
    }
    if (updateMeasureDto.deviceId){
      measure.device = await this.deviceService.findOne(updateMeasureDto.deviceId);

    }
    return this.measuresRepository.save(measure);
  }


  async remove(id: number): Promise<void> {
    await this.measuresRepository.delete(id);
  }
}
