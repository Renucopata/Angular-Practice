import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private router: Router) {

  }

  public goToRoot() {
    this.router.navigate(['/'])
  }

  public goToUser() {
    this.router.navigate(['/user'])
  }

  public goToHome() {
    this.router.navigate(['/home'])
  }

  goToAdmin() {
    this.router.navigate(['/admin'])
  }

}
