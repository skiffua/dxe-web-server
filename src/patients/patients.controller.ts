import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './patient.model';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientStatusValidationPipes } from './pipes/patient-status-validation.pipes';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get()
  getAllPatients(): Patient[] {
    return this.patientsService.getAllPatients();
  }

  @Get('/:id')
  getPatientById(@Param('id') id: string): Patient | null {
    console.log('getId')
    return this.patientsService.getPatientById(id)
  }

  @Delete('/:id')
  deletePatientById(@Param('id') id: string): Patient | null {
    console.log('getId')
    return this.patientsService.deletePatientById(id)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPatient(@Body() createPatientTdo: CreatePatientDto) {
    console.log('body', createPatientTdo);
    return this.patientsService.createNewPatient(createPatientTdo);
  }

  @Patch('/:id/patient')
  updatePatientInfo(
    @Param('id') id: string,
    @Body('name', PatientStatusValidationPipes) name: string,
  ): Patient {
    return this.patientsService.updatePatientName(id, name);
  }
}
