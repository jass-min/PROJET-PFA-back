import { Address } from 'src/address/entities/address.entity';
import { DeviceCategory } from 'src/device-category/entities/device-category.entity';
import { Measure } from 'src/measures/entities/measure.entity';
import EntityHelper from 'src/utiles/entity.helper';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Device extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deviceName: string;

  @Column()
  referenceNumber: string;

  @ManyToOne(() => DeviceCategory, deviceCategory => deviceCategory.devices)
  deviceCategory: DeviceCategory;


  @OneToMany(() => Measure, measure => measure.device) measures: Measure[];
}
