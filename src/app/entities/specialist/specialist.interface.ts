import { Specialty } from 'src/app/shared/interfaces/specialty.interface';
import { IUser } from '../user/user.interface';

export interface ISpecialist extends IUser {
  specialties: Specialty[];
}
