import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface StepThreeParams {
  firstName: string;
  lastName: string;
  age: number;
  dni: string;
  medicalAssistance: string;
  photos: string;
}

@Component({
  selector: 'app-step-three-form',
  templateUrl: './step-three-form.component.html',
  styleUrls: ['./step-three-form.component.css'],
})
export class StepThreeFormComponent implements OnInit {
  @Input() stepForm!: FormGroup;
  @Output() onCompleteStep = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.onCompleteStep.emit(this.stepForm.value);
  }
}
