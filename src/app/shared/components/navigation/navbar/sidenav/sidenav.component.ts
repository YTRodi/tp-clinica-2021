import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { INavLink } from 'src/app/shared/interfaces/navLink.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Output() public sidenavClose = new EventEmitter<
    Promise<MatDrawerToggleResult>
  >();

  @Input() navLinks: INavLink[] = [];

  constructor() {}

  ngOnInit(): void {}

  onSidenavClose() {
    this.sidenavClose.emit();
  }
}
