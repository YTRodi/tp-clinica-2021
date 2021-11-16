import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user/user';
import { ageValidator } from 'src/app/shared/validators/ageValidator';

import { StepOneParams } from '../../components/forms/register/step-one-form/step-one-form.component';
import { StepTwoParams } from '../../components/forms/register/step-two-form/step-two-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: User;

  public stepOneForm: FormGroup;
  public stepTwoForm: FormGroup;

  constructor() {
    this.user = new User();

    this.stepOneForm = new FormGroup({
      email: new FormControl('test@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('Password1', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.stepTwoForm = new FormGroup({
      role: new FormControl(null, [Validators.required]),
      firstName: new FormControl('n', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('apellido', [
        Validators.required,
        Validators.minLength(2),
      ]),
      age: new FormControl(0, [Validators.required, ageValidator]),
      dni: new FormControl('41448581', [
        Validators.required,
        Validators.min(11111111),
        Validators.max(99999999),
      ]),
      photos: new FormControl('photo 1', [Validators.required]), // TODO: Array???
    });
  }

  ngOnInit(): void {}

  onCompleteStepOne({ email, password }: StepOneParams): void {
    this.user.setEmail(email);
    this.user.setPassword(password);
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
    this.user.setRole(role);
    this.user.setFirstName(firstName);
    this.user.setLastName(lastName);
    this.user.setAge(age);
    this.user.setDni(dni);
    this.user.setPhotos([
      {
        url: 'FAKE URL',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);

    try {
      console.log(this.user.build());
    } catch (error) {
      console.log(error);
    }
  }
}
