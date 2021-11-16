import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormError } from 'src/app/shared/interfaces/common/common.interface';

export interface StepOneParams {
  email: string;
  password: string;
}

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.css'],
})
export class StepOneFormComponent implements OnInit, IFormError {
  hide = true;
  @Input() stepForm!: FormGroup;
  @Output() onCompleteStep = new EventEmitter<StepOneParams>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    return this.onCompleteStep.emit(this.stepForm.value);
  }

  getErrorMessage(formControlName: string): string {
    if (this.stepForm.get(formControlName)?.errors?.required) {
      return {
        email: 'El email es requerido',
        password: 'La contraseña es requerida',
      }[formControlName]!;
    }

    if (this.stepForm.get(formControlName)?.hasError('minlength'))
      return 'La contraseña debe contener como mínimo 6 caracteres';

    if (this.stepForm.get(formControlName)?.hasError('email'))
      return 'Email no válido';

    return '';
  }
}
