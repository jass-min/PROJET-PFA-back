import { Address } from 'src/address/entities/address.entity';
import { DeviceCategory } from 'src/device-category/entities/device-category.entity';
import { Measure } from 'src/measures/entities/measure.entity';
import EntityHelper from 'src/utiles/entity.helper';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Device extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'device_name' })
  deviceName: string;

  @Column({ name: 'reference_number' })
  referenceNumber: string;

  // Correctly define the many-to-one relation with DeviceCategory
  @ManyToOne(() => DeviceCategory, (deviceCategory) => deviceCategory.devices, {
    onDelete: 'SET NULL', // To handle what happens if a device category is deleted
  })
  @JoinColumn({ name: 'device_category_id' }) // Ensure the foreign key column name matches
  deviceCategory: DeviceCategory;

  // One-to-many relation with Measure (One device can have many measures)
  @OneToMany(() => Measure, (measure) => measure.device)
  measures: Measure[];
}
