import {Component, OnInit} from '@angular/core';
import {data} from "../data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'hola ';




  totalBoliviansNewCars : number =0 ;
  totalDollarsNewCars : number = 0 ;

  totalBoliviansUsedCars : number =0 ;
  totalDollarsUsedCars : number = 0 ;

  public isHiddenNo:  boolean = true;




  newCars : any = []
  usedCars: any = []

  aux = Object.entries(data.data)

  allCars = Object.fromEntries(this.aux);

  auxFinal = json2array(this.allCars)


  constructor() {

  }

  ngOnInit(): void {



    this.newCars = this.auxFinal.filter(p => p.category === 'sale')

    this.usedCars = this.auxFinal.filter(p => p.category === 'rental')


    console.log(this.newCars)


    console.log(this.usedCars)

  }





}

function json2array(json: any ){
  var result: any[] = [];
  var keys = Object.keys(json);
  keys.forEach(function(key){
    result.push(json[key]);
  });
  return result;
}