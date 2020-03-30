import { EntityRepository, Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { GetPatientFilterDto } from './dto/filter-patient.dto';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
  async getPatients(filterDto: GetPatientFilterDto): Promise<Patient[]> {
    const { name } = filterDto;
    const query = this.createQueryBuilder('patient');

    if (name) {
      query.andWhere('patient.name LIKE :name', { name: `${name}%` } )
    }

    const patients = await query.getMany();
    return patients;
  }

  async createPatient(createPatientDTO: CreatePatientDto): Promise<Patient> {
    const patient = new Patient();
    Object.assign(patient, createPatientDTO);

    await patient.save();

    return patient;
  }
}
