import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConcertComponent } from './concert/concert.component';
import { EnablePipe } from './enable.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ConcertComponent, EnablePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
