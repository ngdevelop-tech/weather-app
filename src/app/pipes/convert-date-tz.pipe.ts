import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDateTz'
})
export class ConvertDateTzPipe implements PipeTransform {

  transform(dt: number, timezone: number): Date {
    return new Date((dt + timezone) * 1000);
  }

}
