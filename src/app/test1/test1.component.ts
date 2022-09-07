import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit, OnChanges, DoCheck {

  @Input() name!: string;
  @Input() lastName: string = "Duran";

  public middleName: string = '';
  public general: string = '';

  constructor() {
    console.log("Constructor")
   }

   ngOnChanges(changes: SimpleChanges): void {
     console.log("on changes", changes, changes['name'].isFirstChange())
   }
  ngOnInit() {
    console.log("On init")
  }

  ngDoCheck():void {
    console.log("do check")
    this.general = this.name + "" +this.lastName + "-" + this.middleName
  }

}