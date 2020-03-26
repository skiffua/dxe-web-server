import { Injectable } from '@nestjs/common';
import { Patient } from './patient.model';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [];

  getAllPatients() {
    console.log('get')
    return this.patients;
  }

  getPatientById(patientId: number): Patient | null {
    return null
    // return this.patients.find(patient =>
    //   patient.patientId === patientId
    // )
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
    console.log(patientId);
    const patient: Patient = {
      patientId, email, phone, name, address, address2, city, state, zip, garantor, procedures, visiting, operations,
    };

    this.patients.push(patient);
    return patient;
  }

}
