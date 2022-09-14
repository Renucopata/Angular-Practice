import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../observable.service';
import { SingletonTestService } from '../singleton-test.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {


  constructor(private singletonService: SingletonTestService, private observServ: ObservableService) {

    this.observServ.currentData().subscribe(s => console.log(s))
   }

  ngOnInit() {
  }

  onClick() {
    console.log('Singleton Test:', this.singletonService);
    this.singletonService.setToken('Renucopata');

  }

}