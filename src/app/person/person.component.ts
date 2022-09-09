import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;
  @Output() sendData = new EventEmitter(null);

  constructor() { }

  ngOnInit() {
  }

  public onSendData(event: any) {
    console.log('Event: '+ event)

    this.sendData.emit({
      name: 'Renuco'
    })
  }

}