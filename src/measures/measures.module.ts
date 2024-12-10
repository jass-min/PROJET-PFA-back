import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasuresService } from './measures.service';
import { MeasuresController } from './measures.controller';
import { Measure } from './entities/measure.entity';
import { AddressModule } from 'src/address/address.module';
import { DevicesModule } from 'src/devices/devices.module';

@Module({
  imports: [TypeOrmModule.forFeature([Measure]),AddressModule,DevicesModule],
  controllers: [MeasuresController],
  providers: [MeasuresService],
  exports: [MeasuresService],
})
export class MeasuresModule {}
