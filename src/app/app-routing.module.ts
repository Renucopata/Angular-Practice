import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { Person2Component } from './person2/person2.component';

const routes: Routes = [
  {path: 'person', component: PersonComponent},
  {path: 'person2', component: Person2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }