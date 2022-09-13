import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  template: `
  <div>
  <p> Home 2 html in ts </p>

  <button (click)="testButton(null)">Test</button>

  <p> {{arg1 ?? arg2}} </p>
  <p> {{arg1 || arg2}} </p>
  </div>
  `,

})
export class Home2Component implements OnInit {

  arg1 = 0;
  arg2 = "Camilaaa";

  constructor() { }

  ngOnInit() {
  }

  public testButton(name: string) {
    const ifNotNull = 'Camila';
    console.log(name?? ifNotNull); //nullish colaising
    return name + "Engañado";
  }

}