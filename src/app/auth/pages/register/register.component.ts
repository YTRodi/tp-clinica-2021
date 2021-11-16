import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IPatient } from 'src/app/entities/patient/patient.interface';
import { ISpecialist } from 'src/app/entities/specialist/specialist.interface';
import { Role } from 'src/app/shared/enums/role.enum';
import { StepOneParams } from '../../components/forms/register/step-one-form/step-one-form.component';
import { StepTwoParams } from '../../components/forms/register/step-two-form/step-two-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: IPatient | ISpecialist;

  public stepOneForm: FormGroup;
  public stepTwoForm: FormGroup;

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
      specialties: [],
    };

    this.stepOneForm = new FormGroup({
      email: new FormControl('test@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('Password1', [Validators.required]),
    });

    this.stepTwoForm = new FormGroup({
      role: new FormControl(null, [Validators.required]),
      firstName: new FormControl('nombre', [Validators.required]),
      lastName: new FormControl('apellido', [Validators.required]),
      age: new FormControl(25, [Validators.required]),
      dni: new FormControl('41448581', [Validators.required]),
      photos: new FormControl('photo 1', [Validators.required]), // TODO: Array???
      medicalAssistance: new FormControl('photo 1', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onCompleteStepOne({ email, password }: StepOneParams): void {
    this.user.email = email;
    this.user.password = password;
  }

  onCompleteStepTwo({
    role,
    firstName,
    lastName,
    age,
    dni,
    medicalAssistance,
    specialties,
    photos,
  }: StepTwoParams): void {
    console.log({
      role,
      firstName,
      lastName,
      age,
      dni,
      medicalAssistance,
      specialties,
      photos,
    });
  }

  // onCompleteStepThree({
  // firstName,
  // lastName,
  // age,
  // dni,
  // medicalAssistance,
  // specialties,
  // photos,
  // }: StepThreeParams): void {
  //   this.user.firstName = firstName;
  //   this.user.lastName = lastName;
  //   this.user.age = age;
  //   this.user.dni = dni;

  //   // this.user.medicalAssistance = medicalAssistance;
  //   // this.user.specialties = specialties;

  //   this.user.photos = [
  //     {
  //       url: 'FAKE URL',
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //       deletedAt: null,
  //     },
  //   ];

  //   console.log(this.user);
  // }
}

// TODO: me quedé acá COMO HACER que si cambio el
