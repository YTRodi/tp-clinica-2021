import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IRoleValue } from 'src/app/shared/interfaces/common/common.interface';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.css'],
})
export class StepOneFormComponent implements OnInit {
  @Input() stepForm!: FormControl;
  @Output() onCompleteStep = new EventEmitter<Role>();
  public roles: IRoleValue[];

  constructor() {
    this.roles = [
      { value: Role.SPECIALIST, viewValue: 'Especialista' },
      { value: Role.PATIENT, viewValue: 'Paciente' },
    ];
  }

  ngOnInit(): void {}

  onSubmit(): void {
    return this.onCompleteStep.emit(this.stepForm.value);
  }
}
