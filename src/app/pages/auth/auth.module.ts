import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Route[] = [
  {
    path: '',
    component: AuthComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }