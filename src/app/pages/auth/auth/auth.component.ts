import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService,  private router: Router) {
  }

  onLogin() {
    this.authService.login({
      email: 'test@test.com',
      password: '123456',
      returnSecureToken: true
    }).subscribe(res => {
      console.log('RESPONSE: ', res)
      this.router.navigate(['home'])
    })
  }

  onCreate() {
    this.authService.createUser({
      email: 'test2@test.com',
      password: '123456',
      returnSecureToken: true
    }).subscribe(res => {
      console.log('CREATE USER: ', res)
    })
  }

}