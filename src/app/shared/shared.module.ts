import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NotFoundComponent } from './pages/not-found/not-found.component';

import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SidenavComponent } from './components/navigation/navbar/sidenav/sidenav.component';
import { HeaderComponent } from './components/navigation/navbar/header/header.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    NavbarComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
