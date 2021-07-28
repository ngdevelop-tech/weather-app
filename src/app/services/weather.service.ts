import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityWeather } from '../models/weather.model';
import { CityForecast } from '../models/city-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  BASE_URL = `http://api.openweathermap.org/data/2.5`;
  APP_ID = `3d8b309701a13f65b660fa2c64cdc517`;

  constructor(private httpClient: HttpClient) { }

  getWeatherByCity(city: string, countryCode: string) {
    let params = {
      q: `${city},${countryCode}`,
      units:'metric',
      appid: this.APP_ID
    }

    return this.httpClient.get<CityWeather>(this.BASE_URL + '/weather', { params });
  }

  getForecastByCity(city: string) {
    let params = {
      q: `${city}`,
      units:'metric',
      cnt: 5,
      appid: this.APP_ID
    }

    return this.httpClient.get<CityForecast>(this.BASE_URL + '/forecast/daily', { params });
  }
}
