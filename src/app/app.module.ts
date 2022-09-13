import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, UserComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
