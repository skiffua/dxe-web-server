import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { PatientsController } from './patients/patients.controller';
import { PatientsService } from './patients/patients.service';

@Module({
  imports: [PatientsModule],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class AppModule {}
