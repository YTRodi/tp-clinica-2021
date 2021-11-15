import {
  IIdentity,
  ICommonEntity,
} from 'src/app/shared/interfaces/common/common.interface';
import { IPhoto } from '../photo/photo';
import { Role } from 'src/app/shared/enums/role.enum';

export interface IUser extends IIdentity<string>, ICommonEntity {
  id?: string;
  active: boolean;
  firstName: string;
  lastName: string;
  age: number;
  dni: string;
  email: string;
  password: string;
  photos: IPhoto[];
  role: Role;
}
