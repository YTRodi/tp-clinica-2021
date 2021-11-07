import { Component, OnInit } from '@angular/core';
import { INavLink } from 'src/app/shared/interfaces/navLink.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public navLinks: INavLink[] = [
    { to: '/auth/login', text: 'Iniciar sesión', icon: 'login' },
    {
      to: '/auth/register',
      text: 'Registrate gratis aquí',
      accent: true,
      icon: 'person_add',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
