import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientRepository } from './patient.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { GetPatientFilterDto } from './dto/filter-patient.dto';
import { User } from '../auth/user.entity';


@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(PatientRepository)
    private patientRepository: PatientRepository,
  ) {}

  async getPatients(filterDto: GetPatientFilterDto): Promise<Patient[]> {
    return this.patientRepository.getPatients(filterDto);
  };

  async getPatientById(id: number): Promise<Patient> {
    const found = await this.patientRepository.findOne(id);

      if (!found) {
        throw new NotFoundException('not found this patient');
      }
      return found;
  };
    // getPatientById(id: string): Patient | null {
  //   console.log('patientId***********', id, typeof(id));
  //   const result = this.patients.find(patient => patient.patientId == parseInt(id));
  //   console.log(this.patients, result)
  //   if (!result) {
  //     throw new NotFoundException('not found this patient');
  //   }
  //   return result;
  // };
  //
  async deletePatientById(id: number): Promise<Patient> {
    const found = await this.getPatientById(id);
    await this.patientRepository.delete(id);
    return found;
  };

  async updatePatientInfo(patientInfoDto: CreatePatientDto): Promise<Patient> {
    await this.patientRepository.update(patientInfoDto.patientId, patientInfoDto);
    const updatedPatient = await this.getPatientById(patientInfoDto.patientId);
    return updatedPatient;
  };
  //
  // updatePatientName(id: string, name: string): Patient | null {
  //   const found: Patient = this.getPatientById(id);
  //   found.name = name;
  //   return found;
  // };
  //
 async  createNewPatient(
   createPatientDto: CreatePatientDto,
   user: User,
   ) {
    return this.patientRepository.createPatient(createPatientDto, user);
  }
  // createNewPatient({
  //                    patientId=1,
  //                    email="test@mail.com",
  //                    phone='09234',
  //                    name='test',
  //                    address='address',
  //                    address2,
  //                    city='city',
  //                    state='state',
  //                    zip='123',
  //                    garantor=false,
  //                    procedures=[],
  //                    visiting=10,
  //                    operations=5,
  //                  }: CreatePatientDto): Patient {
  //   const patient: Patient = {
  //     patientId, email, phone, name, address, address2, city, state, zip, garantor, procedures, visiting, operations,
  //   };
  //
  //   this.patients.push(patient);
  //   return patient;
  // }

}
