import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StepOneFormComponent } from './components/forms/register/step-one-form/step-one-form.component';
import { StepTwoFormComponent } from './components/forms/register/step-two-form/step-two-form.component';
import { LoginFormComponent } from './components/forms/login/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    StepOneFormComponent,
    StepTwoFormComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class AuthModule {}
