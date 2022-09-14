import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'test';

  constructor(private carService: CarService,
    private authService: AuthService) {
}
  ngOnInit() {
    this.carService.getAllCars().subscribe(res => {
      console.log('RESPONSE CARS: ', res)
    })
  }

  public onLogout(): void {
    this.authService.logout();
  }



}