import { Injectable, NotFoundException } from '@nestjs/common';
import { Patient } from './patient.model';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [];

  getAllPatients() {
    console.log('get')
    return this.patients;
  }

  getPatientById(id: string): Patient | null {
    console.log('patientId***********', id, typeof(id));
    const result = this.patients.find(patient => patient.patientId == parseInt(id));
    console.log(this.patients, result)
    if (!result) {
      throw new NotFoundException('not found this patient');
    }
    return result;
  };

  deletePatientById(id: string): Patient | null {
    const found: Patient = this.getPatientById(id);
    this.patients = this.patients.filter(patient => patient.patientId !== found.patientId);
    return found;
  };

  updatePatientName(id: string, name: string): Patient | null {
    const found: Patient = this.getPatientById(id);
    found.name = name;
    return found;
  };

  createNewPatient({
                     patientId=1,
                     email="test@mail.com",
                     phone='09234',
                     name='test',
                     address='address',
                     address2,
                     city='city',
                     state='state',
                     zip='123',
                     garantor=false,
                     procedures=[],
                     visiting=10,
                     operations=5,
                   }: CreatePatientDto): Patient {
    const patient: Patient = {
      patientId, email, phone, name, address, address2, city, state, zip, garantor, procedures, visiting, operations,
    };

    this.patients.push(patient);
    return patient;
  }

}
