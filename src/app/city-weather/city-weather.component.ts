import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city.model';
import { CityWeather } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {

  @Input() city!: City;

  weatherDetails$: Observable<CityWeather> | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherDetails$ = this.weatherService.getWeatherByCity(this.city.name, this.city.countryCode);
  }

}
