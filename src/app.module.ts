import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { PatientsController } from './patients/patients.controller';
import { PatientsService } from './patients/patients.service';

import "reflect-metadata";
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PatientsModule],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class AppModule {}
