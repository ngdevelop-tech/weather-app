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

  /**
   * Get city weather details
   * @param city country name ex. London
   * @param countryCode country code ex. uk
   * @returns 
   */
  getWeatherByCity(city: string, countryCode: string) {
    let params = {
      q: `${city},${countryCode}`,
      units:'metric',
      appid: this.APP_ID
    }

    return this.httpClient.get<CityWeather>(this.BASE_URL + '/weather', { params });
  }

  /**
   * Get City weather forecast for five days
   * @param city city name ex. London
   * @returns 
   */
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
