export class Procedure {
  procedureCode: number | null;
  title: string;
  date: string;
  amount: number | null;
  note: string;
}

export class CreatePatientDto {
  patientId: number | null;
  email: string;
  phone: string;
  name: string;
  address: string;
  address2?: string;
  city: string;
  state?: string;
  zip: string;
  garantor: boolean;
  procedures: Array<Procedure>;
  visiting: number | null;
  operations: number | null;
}
