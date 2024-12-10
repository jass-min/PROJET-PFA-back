import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import EntityHelper from 'src/utiles/entity.helper';
import { Device } from 'src/devices/entities/device.entity';

@Entity()
export class DeviceCategory extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @OneToMany(() => Device, (device) => device.deviceCategory, {
    eager: true,
    nullable: true,
  })
  devices: Device[];
}
