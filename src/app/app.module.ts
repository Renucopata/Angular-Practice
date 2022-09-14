import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { TestService } from './test.service';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule],
  declarations: [ AppComponent, HelloComponent, PersonComponent ],
  providers: [TestService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
