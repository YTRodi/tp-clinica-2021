import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user/user';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  public newUser = new User();

  constructor() {}

  ngOnInit(): void {}

  onCompleteStepOne(event: Role) {
    this.newUser.setRole(event);
  }
}
