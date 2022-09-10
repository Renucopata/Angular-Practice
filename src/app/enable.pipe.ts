import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enable'
})
export class EnablePipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    return value === true ? 'Si' : 'No';
  }

}