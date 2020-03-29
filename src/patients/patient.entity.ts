import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  patientId: number | null;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  address2?: string;

  @Column()
  city: string;

  @Column()
  state?: string;

  @Column()
  zip: string;

  @Column()
  garantor: boolean;

  @Column()
  visiting: number | null;

  @Column()
  operations: number | null;
}
