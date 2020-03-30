import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientRepository } from './patient.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PatientRepository])],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
