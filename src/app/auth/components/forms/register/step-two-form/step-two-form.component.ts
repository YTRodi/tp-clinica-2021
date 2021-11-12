import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.css'],
})
export class StepTwoFormComponent implements OnInit {
  hide = true;
  @Output() onCompleteStep = new EventEmitter();
  public stepTwoForm: FormGroup;

  constructor() {
    this.stepTwoForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    return this.onCompleteStep.emit(this.stepTwoForm.value);
  }
}
