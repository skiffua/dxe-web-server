import { PipeTransform } from '@nestjs/common';

export class PatientStatusValidationPipes implements PipeTransform{

  transform(value: any) {

    return value;
  }
}
