import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure'
})
export class PurePipe implements PipeTransform { //custome pure pipe

  transform(data: number[], args?: any): any {
    return data.filter(n => n%2 === 0);
  }

}