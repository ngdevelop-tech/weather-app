import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CityForecast } from '../models/city-forecast.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {

  forecast$: Observable<CityForecast>;

  constructor(private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService) {

    this.forecast$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => this.weatherService.getForecastByCity(params.get('city')!))
    );

  }

  ngOnInit(): void {

  }

}
