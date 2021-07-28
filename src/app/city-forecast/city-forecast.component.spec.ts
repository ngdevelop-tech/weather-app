import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ConvertDateTzPipe } from '../pipes/convert-date-tz.pipe';
import { WeatherIconPipe } from '../pipes/weather-icon.pipe';
import { WeatherService } from '../services/weather.service';

import { CityForecastComponent } from './city-forecast.component';

describe('CityForecastComponent', () => {
  let component: CityForecastComponent;
  let fixture: ComponentFixture<CityForecastComponent>;
  let weatherServiceSpy : { getForecastByCity : jasmine.Spy};
  const forecastValue = {
    "city": {
      "name": "London",
      "timezone": 5000
    },
    "cnt": 5,
    "list": [
      {
        "dt": 1627473600,
        "temp": {
          "morn": 15.39
        },
        "pressure": 1006,
        "humidity": 57,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
      },
      {
        "dt": 1627560000,
        "temp": {
          "morn": 13.28
        },
        "pressure": 1010,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
      },
      {
        "dt": 1627646400,
        "temp": {
          "morn": 13.53
        },
        "pressure": 1001,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
      },
      {
        "dt": 1627732800,
        "temp": {
          "morn": 13.61
        },
        "pressure": 1009,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
      },
      {
        "dt": 1627819200,
        "temp": {
          "morn": 14.03
        },
        "pressure": 1010,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
      }
    ]
  };

  beforeEach(async () => {

    weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['getForecastByCity']);

    await TestBed.configureTestingModule({
      declarations: [ CityForecastComponent, ConvertDateTzPipe, WeatherIconPipe ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy},
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get : (key: string) => 'London'})
          }
        }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    weatherServiceSpy.getForecastByCity.and.returnValue(of(forecastValue));
    fixture = TestBed.createComponent(CityForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render city forecast table', () => {
    let forecastRows = fixture.nativeElement.querySelectorAll('tbody tr'); 
    expect(forecastRows.length).toBe(5);
  });

  it('should render city title', () => {
    let title = fixture.nativeElement.querySelector('h1').innerText;
    expect(title).toBe('London');
  });
});
