import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post, Query, UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientStatusValidationPipes } from './pipes/patient-status-validation.pipes';
import { Patient } from './patient.entity';
import { GetPatientFilterDto } from './dto/filter-patient.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('patients')
@UseGuards(AuthGuard())
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get()
  getPatients(@Query(ValidationPipe) filterDto: GetPatientFilterDto): Promise<Patient[]> {
    return this.patientsService.getPatients(filterDto);
  }

  @Get('/:id')
  getPatientById(@Param('id', ParseIntPipe) id: number): Promise<Patient> {
    return this.patientsService.getPatientById(id)
  }

  @Delete('/:id')
  deletePatientById(@Param('id', ParseIntPipe) id: number): Promise<Patient> {
    return this.patientsService.deletePatientById(id)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPatient(
    @Body() createPatientTdo: CreatePatientDto,
    @GetUser() user: User,
    ) {
    return this.patientsService.createNewPatient(createPatientTdo, user);
  }

  @Patch('/:id')
  updatePatientInfo(
    @Param('id', ParseIntPipe) id: number,
    @Body() patientInfoDto: CreatePatientDto,
  ): Promise<Patient> {
    return this.patientsService.updatePatientInfo(patientInfoDto);
  }
}
