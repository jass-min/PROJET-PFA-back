import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import EntityHelper from 'src/utiles/entity.helper';
import { Device } from 'src/devices/entities/device.entity';
import { Measure } from 'src/measures/entities/measure.entity';

@Entity()
export class Address extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'double precision', nullable: false })
  latitude: number;

  @Column({type: 'double precision', nullable: false })
  longitude: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  province: string;

 

}
