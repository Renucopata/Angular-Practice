import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
  }

  onClick() {
    console.log("Name: ", this.testService.getName());
  }

}