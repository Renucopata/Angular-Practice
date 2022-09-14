import { Component, OnInit } from '@angular/core';
import { closeSidePanel, openSidePanel } from '../../../redux/home.actions';
import { AuthService } from '../../services/auth.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'test';
  openPanel: boolean = false;

  showFiller = false;

  constructor(private carService: CarService,
    private authService: AuthService, private store: Store) {
}
  ngOnInit() {
    this.carService.getAllCars().subscribe(res => {
      console.log('RESPONSE CARS: ', res)
    })
    this.store.select((s: any) => s.home).subscribe(s => {
      console.log('STORE: ', s)
      this.openPanel = s.sidePanel;
      console.log('RESPONSE CARS: ', s, this.openPanel)
    })
  }

  public onLogout(): void {
    this.authService.logout();
  }
  onOpenSidePanel() {
    this.store.dispatch(openSidePanel())
  }

  onCloseSidePanel() {
    this.store.dispatch(closeSidePanel())
  }



}