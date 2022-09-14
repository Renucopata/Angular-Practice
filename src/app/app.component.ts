import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  numbers: any = [1, 2, 3, 4, 5, 6, 7, 8]


constructor() {
  console.log("Pure Sums")
  console.log(this.pureSum(2, 3))
  console.log(this.pureSum(2, 3))
  console.log(this.pureSum(2, 3))
  console.log("Impure Sums")
  console.log(this.impureSum(2))
  console.log(this.impureSum(2))
  console.log(this.impureSum(3))
  console.log(this.impureSum2(2, 3))
  console.log(this.impureSum2(2, 3))
  console.log(this.impureSum2(2, 3))


}

pureSum = (a, b) => {return a + b} //pure
impureSum2(a:number, b:number){ // impure
  return (a + b + Math.random()).toFixed()
}

impureSum = (() => {
  let state = 0;
  return (v) => {
    return state += v;
  }
})();
}


