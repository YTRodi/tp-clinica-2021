import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IRoleValue } from 'src/app/shared/interfaces/common/common.interface';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.css'],
})
export class StepOneFormComponent implements OnInit {
  @Output() onCompleteStep = new EventEmitter<Role>();

  public roles: IRoleValue[];
  public selectFormControl: FormControl;

  constructor() {
    this.roles = [
      { value: Role.SPECIALIST, viewValue: 'Especialista' },
      { value: Role.PATIENT, viewValue: 'Paciente' },
    ];

    this.selectFormControl = new FormControl(null, [Validators.required]);
  }

  ngOnInit(): void {}

  onSubmit(): void {
    return this.onCompleteStep.emit(this.selectFormControl.value);
  }
}
