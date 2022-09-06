import {Component, Inject, Input, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {


  @Input() type!:string;

  @Input() color!:string;

  @Input() capacity!:number;

  @Input() createDate!:string;

  @Input() price!:number;

  @Input() isEnableButtonBuy!:boolean ;

  @Input() isHiddenText: boolean = true;

  @Input() moneyType!: string ;

  @Input() category!: string ;


  constructor(@Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit(): void {


  }

  buyClick() {

    this.isEnableButtonBuy = true;
    this.isHiddenText = false

    if ( this.category === 'sale' ){
      this.parent.totalBoliviansNewCars += this.price
    }else {
      this.parent.totalBoliviansUsedCars += this.price
    }



  }
}