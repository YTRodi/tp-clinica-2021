import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { INavLink } from 'src/app/shared/interfaces/navLink.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter<
    Promise<MatDrawerToggleResult>
  >();

  @Input() title?: string;
  @Input() navLinks: INavLink[] = [];

  constructor() {}

  ngOnInit(): void {}

  onToggleSideNav() {
    this.sidenavToggle.emit();
  }
}
