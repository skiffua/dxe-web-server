import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './patient.model';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patientsService')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get()
  getAllPatients(): Patient[] {
    return this.patientsService.getAllPatients();
  }

  @Get('/:id')
  getPatientById(@Param('id') id: number): Patient | null {
    console.log('get')
    return this.patientsService.getPatientById(id)
  }

  @Post()
  createPatient(@Body() createPatientTdo: CreatePatientDto) {
    console.log('body', createPatientTdo);
    return this.patientsService.createNewPatient(createPatientTdo);
  }
}
