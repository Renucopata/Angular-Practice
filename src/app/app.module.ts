import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, PurePipe, ImpurePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
