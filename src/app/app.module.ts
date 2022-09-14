import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
