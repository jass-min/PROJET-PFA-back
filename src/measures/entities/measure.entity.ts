import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import EntityHelper from 'src/utiles/entity.helper';
import { Device } from 'src/devices/entities/device.entity';
import { Address } from 'src/address/entities/address.entity';

@Entity()
export class Measure extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:1})
  quantity:number;
  @ManyToOne(() => Device, device => device.measures, { onDelete: 'CASCADE' }) device: Device;

  //faire un tableau de jointure(onetoone)
  @OneToOne(() => Address, { cascade: true, eager:true })
  @JoinColumn()
  address: Address;
}
