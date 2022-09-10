import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  @Input() name!: string;
  @Input() stock!: number;
  @Input() enable!: boolean;
  @Input() type!: string;

  

  @Output() buy = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onComprar() {
    this.stock --;
  }

}