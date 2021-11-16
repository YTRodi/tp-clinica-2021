import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface StepOneParams {
  email: string;
  password: string;
}

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.css'],
})
export class StepOneFormComponent implements OnInit {
  hide = true;
  @Input() stepForm!: FormGroup;
  @Output() onCompleteStep = new EventEmitter<StepOneParams>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    return this.onCompleteStep.emit(this.stepForm.value);
  }
}
