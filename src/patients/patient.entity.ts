import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  patientId: number;

  @Column()
  email: string = '';

  @Column()
  phone: string = '';

  @Column()
  name: string = '';

  @Column()
  address: string = '';

  @Column()
  address2?: string = '';

  @Column()
  city: string = '';

  @Column()
  state?: string = '';

  @Column()
  zip: string = '';

  @Column()
  garantor: boolean = false;

  @Column()
  visiting: number = 0;

  @Column()
  operations: number = 0;
}
