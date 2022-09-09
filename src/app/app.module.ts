import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorChangerDirective } from './color-changer.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ColorChangerDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
