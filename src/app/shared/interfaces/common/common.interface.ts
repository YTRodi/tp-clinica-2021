import { Role } from '../../enums/role.enum';
import { Maybe } from '../../types';

export interface ICommonEntity {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Maybe<Date>;
}

export interface IIdentity<T> {
  id?: T;
}

export interface IRoleValue {
  value: Role;
  viewValue: string;
}

export interface IFormError {
  getErrorMessage(formControlName: string): string;
}
