import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/shared/enums/role.enum';
import {
  IFormError,
  IRoleValue,
} from 'src/app/shared/interfaces/common/common.interface';

export interface StepTwoParams {
  role: Role;
  firstName: string;
  lastName: string;
  age: number;
  dni: string;
  medicalAssistance?: string;
  specialties?: string;
  photos: string;
}

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.css'],
})
export class StepTwoFormComponent implements OnInit, OnChanges, IFormError {
  @Input() stepForm!: FormGroup;
  @Output() onCompleteStep = new EventEmitter<StepTwoParams>();
  public isPatient: boolean;
  public roles: IRoleValue[];

  constructor() {
    this.isPatient = false;
    this.roles = [
      { value: Role.SPECIALIST, viewValue: 'Especialista' },
      { value: Role.PATIENT, viewValue: 'Paciente' },
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes.stepForm.currentValue.valueChanges.subscribe(
      ({ role }: StepTwoParams) => {
        if (role === Role.PATIENT) {
          this.isPatient = true;
          this.stepForm.removeControl('specialties', { emitEvent: false });
          this.stepForm.addControl(
            'medicalAssistance',
            new FormControl(null, [Validators.required]),
            { emitEvent: false }
          );
        }

        if (role === Role.SPECIALIST) {
          this.isPatient = false;
          this.stepForm.removeControl('medicalAssistance', {
            emitEvent: false,
          });
          this.stepForm.addControl(
            'specialties',
            new FormControl(null, [Validators.required]),
            { emitEvent: false }
          );
        }
      }
    );
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.onCompleteStep.emit(this.stepForm.value);
  }

  getErrorMessage(formControlName: string): string {
    if (this.stepForm.get(formControlName)?.touched) {
      if (this.stepForm.get(formControlName)?.errors?.required) {
        return {
          role: 'El tipo de usuario es requerido',
          firstName: 'El nombre es requerido',
          lastName: 'El apellido es requerido',
          age: 'La edad es requerida',
          dni: 'El dni es requerido',
          photos: 'Las fotos son requeridas',
          specialties: 'Las especialidades son requeridas',
          medicalAssistance: 'La obra social es requerida',
        }[formControlName]!;
      }

      if (this.stepForm.get(formControlName)?.hasError('minlength')) {
        return {
          firstName: 'El nombre tiene que tener como mínimo 2 caracteres',
          lastName: 'El apellido tiene que tener como mínimo 2 caracteres',
        }[formControlName]!;
      }

      if (this.stepForm.get(formControlName)?.hasError('ageValidator')) {
        return 'La edad debe ser como mínimo de 1 y máximo 120 años';
      }
    }

    return '';
  }
}
