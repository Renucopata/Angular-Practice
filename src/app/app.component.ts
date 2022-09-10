import { Component, Input, OnInit, VERSION } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  nacionalConcertList: any[] = [];
  interNacionalConcertList: any[] = [];
  @Input() totalStock: number = 30; 

  ngOnInit() {
    Object.entries(data.data)
      .filter((c: any) => c[1].type === 'nacional')
      .forEach((c) => this.nacionalConcertList.push({ id: c[0], ...c[1] }));

    Object.entries(data.data)
      .filter((c: any) => c[1].type === 'internacional')
      .forEach((c) => this.interNacionalConcertList.push({ id: c[0], ...c[1] }));

    
  }
}
