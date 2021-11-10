import {
  IIdentity,
  ICommonEntity,
} from 'src/app/shared/interfaces/common/common.interface';
import { BuilderTemplate } from 'src/app/shared/entities/builder/builderTemplate';
import { IPhoto } from '../photo/photo';
import { Role } from 'src/app/shared/enums/role.enum';
import { Maybe } from 'src/app/shared/types';

export interface IUser extends IIdentity<string>, ICommonEntity {
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

export class User extends BuilderTemplate<IUser> {
  protected initialize(): IUser {
    return {
      active: true,
      firstName: '',
      lastName: '',
      age: 0,
      dni: '',
      email: '',
      password: '',
      photos: [],
      role: Role.PATIENT,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };
  }

  setActive(active: boolean): User {
    this._model.active = active;
    return this;
  }

  setFirstName(firstName: string): User {
    this._model.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): User {
    this._model.lastName = lastName;
    return this;
  }

  setAge(age: number): User {
    this._model.age = age;
    return this;
  }

  setDni(dni: string): User {
    this._model.dni = dni;
    return this;
  }

  setEmail(email: string): User {
    this._model.email = email;
    return this;
  }

  setPassword(password: string): User {
    this._model.password = password;
    return this;
  }

  setPhotos(photos: IPhoto[]): User {
    this._model.photos = photos;
    return this;
  }

  setRole(role: Role): User {
    this._model.role = role;
    return this;
  }

  setUpdatedAt(updatedAtDate: Date): User {
    this._model.updatedAt = updatedAtDate;
    return this;
  }

  setDeletedAt(deletedAtDate: Maybe<Date>): User {
    this._model.deletedAt = deletedAtDate;
    return this;
  }
}

class Patient extends User {}
