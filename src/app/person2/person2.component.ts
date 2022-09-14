import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../observable.service';
import { SingletonTestService } from '../singleton-test.service';

@Component({
  selector: 'app-person2',
  templateUrl: './person2.component.html',
  styleUrls: ['./person2.component.css']
})
export class Person2Component implements OnInit {
  index = 0;

  constructor(private token: SingletonTestService, private observServ: ObservableService) { }

  ngOnInit() {
  }

  onClick() {
    console.log('Token recived: ', this.token.getToken() );
    this.observServ.setData(this.index++)
  }

}