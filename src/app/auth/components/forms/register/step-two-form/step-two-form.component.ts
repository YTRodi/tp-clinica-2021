import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface StepTwoParams {
  email: string;
  password: string;
}

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.css'],
})
export class StepTwoFormComponent implements OnInit {
  hide = true;
  @Input() stepForm!: FormGroup;
  @Output() onCompleteStep = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    return this.onCompleteStep.emit(this.stepForm.value);
  }
}
