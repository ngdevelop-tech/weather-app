import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return weather data by city and countryCode', (done: DoneFn) => {
    let returnData = { name: 'London' };
    httpClientSpy.get.and.returnValue(of(returnData))

    service.getWeatherByCity('London', 'uk').subscribe(data => {
      expect(data.name).toBe('London');
      done();
    })
  });

  it('should return weather forecast data for 5 days', (done: DoneFn) => {
    let returnData = { city: { name: 'London' }, list: [{}, {}, {}, {}, {}] };
    httpClientSpy.get.and.returnValue(of(returnData))
    service.getForecastByCity('London').subscribe(data => {
      expect(data.city.name).toBe('London');
      expect(data.list.length).toBe(5);
      done();
    })
  })
});
