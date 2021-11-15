import { IUser } from '../user/user.interface';

export interface IPatient extends IUser {
  medicalAssistance: string;
}
