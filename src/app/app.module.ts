import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./redux";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes),MatSidenavModule, HttpClientModule,

    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()],
  declarations: [ AppComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap:    [ AppComponent ]

  
})
export class AppModule { }
