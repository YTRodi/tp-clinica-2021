import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user/user';
import { IFormError } from 'src/app/shared/interfaces/common/common.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit, IFormError {
  public user: User;
  public hide: boolean;
  public loginForm: FormGroup;

  constructor() {
    this.user = new User();
    this.hide = true;
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    try {
      const { email, password } = this.loginForm.value;
      console.log({ email, password });
    } catch (error) {
      console.log(error);
    }
  }

  getErrorMessage(formControlName: string): string {
    if (this.loginForm.get(formControlName)?.errors?.required) {
      return {
        email: 'El email es requerido',
        password: 'La contraseña es requerida',
      }[formControlName]!;
    }

    if (this.loginForm.get(formControlName)?.hasError('minlength'))
      return 'La contraseña debe contener como mínimo 6 caracteres';

    if (this.loginForm.get(formControlName)?.hasError('email'))
      return 'Email no válido';

    return '';
  }
}
