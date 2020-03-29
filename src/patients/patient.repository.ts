import { EntityRepository, Repository } from 'typeorm';
import { Patient } from './patient.model';

@EntityRepository()
export class PatientRepository extends Repository<Patient> {

}
