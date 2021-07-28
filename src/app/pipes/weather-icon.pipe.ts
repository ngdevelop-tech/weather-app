import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {

  transform(icon?: string): unknown {
    if (!icon) {
      return;
    }
    return `http://openweathermap.org/img/wn/${icon}.png`;
  }

}
