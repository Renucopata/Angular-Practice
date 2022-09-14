import { Component, OnInit } from '@angular/core';
import { SingletonTestService } from '../singleton-test.service';

@Component({
  selector: 'app-person2',
  templateUrl: './person2.component.html',
  styleUrls: ['./person2.component.css']
})
export class Person2Component implements OnInit {

  constructor(private token: SingletonTestService) { }

  ngOnInit() {
  }

  onClick() {
    console.log('Token recived: ', this.token.getToken() );
  }

}