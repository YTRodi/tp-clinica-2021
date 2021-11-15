import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IPatient } from 'src/app/entities/patient/patient.interface';
import { ISpecialist } from 'src/app/entities/specialist/specialist.interface';
import { Role } from 'src/app/shared/enums/role.enum';

import { StepThreeParams } from '../../components/forms/register/step-three-form/step-three-form.component';
import { StepTwoParams } from '../../components/forms/register/step-two-form/step-two-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: IPatient | ISpecialist;

  public stepOneForm: FormControl;
  public stepTwoForm: FormGroup;
  public stepThreeForm: FormGroup;

  constructor() {
    this.user = {
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

    this.stepOneForm = new FormControl(null, [Validators.required]);

    this.stepTwoForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });

    this.stepThreeForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      dni: new FormControl(null, [Validators.required]),
      medicalAssistance: new FormControl(null, [Validators.required]),
      photos: new FormControl(null, [Validators.required]), // TODO: Array???
    });
  }

  ngOnInit(): void {}

  onCompleteStepOne(role: Role): void {
    //! [IMPORTANTE]:
    // TODO: dependiendo del role elegido, que el step 3 se muestre condicionalmente. (ya que si es paciente, tiene medicalAssistance y si es especialista tiene specialties)
    // TODO: dependiendo del role elegido, que el step 3 se muestre condicionalmente. (ya que si es paciente, tiene medicalAssistance y si es especialista tiene specialties)
    // TODO: dependiendo del role elegido, que el step 3 se muestre condicionalmente. (ya que si es paciente, tiene medicalAssistance y si es especialista tiene specialties)
    this.user.role = role;
  }

  onCompleteStepTwo({ email, password }: StepTwoParams): void {
    this.user.email = email;
    this.user.password = password;
  }

  onCompleteStepThree({
    firstName,
    lastName,
    age,
    dni,
    medicalAssistance,
    photos,
  }: StepThreeParams): void {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.age = age;
    this.user.dni = dni;

    // this.user.medicalAssistance = medicalAssistance;
    // this.user.specialties = specialties;

    this.user.photos = [
      {
        url: 'FAKE URL',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ];

    console.log(this.user);
  }
}

// TODO: me quedé acá arreglando el tema de "medicalAssitance y specialties"
