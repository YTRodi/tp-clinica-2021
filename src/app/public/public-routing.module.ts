import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/pages/not-found/not-found.component';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '/404' },
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
