import { BuilderTemplate } from 'src/app/shared/entities/builder/builderTemplate';
import { Role } from 'src/app/shared/enums/role.enum';
import { Maybe } from 'src/app/shared/types';
import { IPhoto } from '../photo/photo';
import { IUser } from '../user/user';

export interface ISpecialist extends IUser {
  specialties: string[];
}

export class Specialist extends BuilderTemplate<ISpecialist> {
  protected initialize(): ISpecialist {
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
      specialties: [],
    };
  }

  setActive(active: boolean): Specialist {
    this._model.active = active;
    return this;
  }

  setFirstName(firstName: string): Specialist {
    this._model.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): Specialist {
    this._model.lastName = lastName;
    return this;
  }

  setAge(age: number): Specialist {
    this._model.age = age;
    return this;
  }

  setDni(dni: string): Specialist {
    this._model.dni = dni;
    return this;
  }

  setEmail(email: string): Specialist {
    this._model.email = email;
    return this;
  }

  setPassword(password: string): Specialist {
    this._model.password = password;
    return this;
  }

  setPhotos(photos: IPhoto[]): Specialist {
    this._model.photos = photos;
    return this;
  }

  setRole(role: Role): Specialist {
    this._model.role = role;
    return this;
  }

  setUpdatedAt(updatedAtDate: Date): Specialist {
    this._model.updatedAt = updatedAtDate;
    return this;
  }

  setDeletedAt(deletedAtDate: Maybe<Date>): Specialist {
    this._model.deletedAt = deletedAtDate;
    return this;
  }

  setSpecialties(specialties: string[]): Specialist {
    this._model.specialties = specialties;
    return this;
  }
}
