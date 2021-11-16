import { BuilderTemplate } from 'src/app/shared/entities/builder/builderTemplate';
import { Role } from 'src/app/shared/enums/role.enum';
import { Maybe } from 'src/app/shared/types';
import { IPhoto } from '../photo/photo';
import { IUser } from '../user/user';

export interface IPatient extends IUser {
  medicalAssistance: string;
}

export class Patient extends BuilderTemplate<IPatient> {
  protected initialize(): IPatient {
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
      medicalAssistance: '',
    };
  }

  setActive(active: boolean): Patient {
    this._model.active = active;
    return this;
  }

  setFirstName(firstName: string): Patient {
    this._model.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): Patient {
    this._model.lastName = lastName;
    return this;
  }

  setAge(age: number): Patient {
    this._model.age = age;
    return this;
  }

  setDni(dni: string): Patient {
    this._model.dni = dni;
    return this;
  }

  setEmail(email: string): Patient {
    this._model.email = email;
    return this;
  }

  setPassword(password: string): Patient {
    this._model.password = password;
    return this;
  }

  setPhotos(photos: IPhoto[]): Patient {
    this._model.photos = photos;
    return this;
  }

  setRole(role: Role): Patient {
    this._model.role = role;
    return this;
  }

  setUpdatedAt(updatedAtDate: Date): Patient {
    this._model.updatedAt = updatedAtDate;
    return this;
  }

  setDeletedAt(deletedAtDate: Maybe<Date>): Patient {
    this._model.deletedAt = deletedAtDate;
    return this;
  }

  setMedicalAssistance(medicalAssistance: string): Patient {
    this._model.medicalAssistance = medicalAssistance;
    return this;
  }
}
