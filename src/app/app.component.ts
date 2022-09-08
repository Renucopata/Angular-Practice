import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

public name: string = 'Camila';
public showInfo1: boolean = false;
public showInfo2: boolean = false;
public showInfo3: boolean = false;
public hide: boolean = false;
 
}
