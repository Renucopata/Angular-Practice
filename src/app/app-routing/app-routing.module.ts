import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin/admin.component';
import { HomeComponent } from '../home/home.component';
import { Home1Component } from '../home/home1/home1.component';
import { Home2Component } from '../home/home2/home2.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [ //Navigation per modules
  {path: 'home', component: HomeComponent, 
children: [
  {path: 'home1', component: Home1Component}, //Sub navigation per modules
  {path: 'home2', component: Home2Component}
]},
  {path: 'user', component: UserComponent},
  {path: 'admin/:id/textoFijo/: id2', component: AdminComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }