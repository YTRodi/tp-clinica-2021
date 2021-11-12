import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user/user';
import { Role } from 'src/app/shared/enums/role.enum';

interface StepTwoParams {
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user = new User();

  constructor() {}

  ngOnInit(): void {}

  onCompleteStepOne(role: Role) {
    this.user.setRole(role);
  }

  onCompleteStepTwo({ email, password }: StepTwoParams) {
    this.user.setEmail(email);
    this.user.setPassword(password);
  }
}
