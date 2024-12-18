import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import EntityHelper from 'src/utiles/entity.helper';
import { Device } from 'src/devices/entities/device.entity';
import { Address } from 'src/address/entities/address.entity';

@Entity()
export class Measure extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  quantity: number;

  @ManyToOne(() => Device, (device) => device.measures, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'device_id' })
  device: Device;

  @OneToOne(() => Address, { cascade: true, eager: true })
  @JoinColumn({ name: 'address_id' })
  address: Address;
}
