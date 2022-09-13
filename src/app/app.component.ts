import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  nacionalConcertList: any[] = [];
  interNacionalConcertList: any[] = [];
  @Input() totalStock: number = 0; 


  ngOnInit() {
    Object.entries(data.data)
      .filter((c: any) => c[1].type === 'nacional')
      .forEach((c) => this.nacionalConcertList.push({ id: c[0], ...c[1] }));

    Object.entries(data.data)
      .filter((c: any) => c[1].type === 'internacional')
      .forEach((c) => this.interNacionalConcertList.push({ id: c[0], ...c[1] }));
    
    Object.entries(data.data).forEach((c: any) => {
      this.totalStock = this.totalStock + c[1].stock
    }
    )
  
  }

  public upDateStock(event: number) {
        this.totalStock = this.totalStock - event;
  }
}
