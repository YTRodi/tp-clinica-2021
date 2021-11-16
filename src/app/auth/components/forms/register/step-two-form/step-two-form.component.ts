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
export class StepTwoFormComponent implements OnInit {
  @Input() stepForm!: FormGroup;
  @Output() onCompleteStep = new EventEmitter<StepTwoParams>();
  public roles: IRoleValue[];

  constructor() {
    this.roles = [
      { value: Role.SPECIALIST, viewValue: 'Especialista' },
      { value: Role.PATIENT, viewValue: 'Paciente' },
    ];
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.isPatient.currentValue) {
  //     this.stepForm.removeControl('specialties');
  //     this.stepForm.addControl(
  //       'medicalAssistance',
  //       new FormControl('OBRA SOCIAL TEST', [Validators.required])
  //     );
  //   }

  //   if (!changes.isPatient.currentValue) {
  //     this.stepForm.removeControl('medicalAssistance');
  //     this.stepForm.addControl(
  //       'specialties',
  //       new FormControl('ESPECIALIDAD TEST', [Validators.required])
  //     );
  //   }
  // }

  ngOnInit(): void {}

  onSubmit(): void {
    this.onCompleteStep.emit(this.stepForm.value);
  }
}
