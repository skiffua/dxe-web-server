import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { User } from '../auth/user.entity';

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

  @ManyToOne(type => User, user => user.patients, { eager: false })
  user: User;
}
