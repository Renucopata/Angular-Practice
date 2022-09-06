import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string):any {

    let d = new Date(value);
    return d.toLocaleDateString('en-GB');
  }



}