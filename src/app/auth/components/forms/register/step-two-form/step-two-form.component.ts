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
import { IRoleValue } from 'src/app/shared/interfaces/common/common.interface';

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
export class StepTwoFormComponent implements OnInit, OnChanges {
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
}
