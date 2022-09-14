import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  name: string = 'Renuco'

  constructor() { }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name; 
  }

}