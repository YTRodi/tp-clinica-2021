import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  public stepperOrientation: Observable<StepperOrientation>;

  public user: User;

  public stepOneForm: FormGroup;
  public stepTwoForm: FormGroup;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    this.user = new User();

    this.stepOneForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.stepTwoForm = new FormGroup({
      role: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      age: new FormControl(null, [Validators.required, ageValidator]),
      dni: new FormControl(null, [
        Validators.required,
        Validators.min(11111111),
        Validators.max(99999999),
      ]),
      photos: new FormControl(null, [Validators.required]), // TODO: Array???
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
