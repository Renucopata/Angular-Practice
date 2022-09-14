import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ObservableService {

  private data$ = new BehaviorSubject<number>(8);

  constructor() { }
  getData(): number {
    return this.data$.getValue();
  }

  setData(num: number): void {
    this.data$.next(num);
  }

  currentData(): Observable<number> {
    return this.data$.asObservable();
  }

}