import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild('div1') div1Ts: ElementRef
  @ViewChild('input1') input1Ts: ElementRef
  @ViewChild('myPerson') myPersonTs: any

  public onShowVars() {
    console.log("Elements: " + this.div1Ts, this.input1Ts, this.myPersonTs );
    this.myPersonTs.onSendData();
    this.input1Ts.nativeElement.value="Renucopata";
  }
}
