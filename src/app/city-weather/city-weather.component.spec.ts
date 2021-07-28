import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../services/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CityWeatherComponent } from './city-weather.component';
import { of } from 'rxjs';
import { WeatherIconPipe } from '../pipes/weather-icon.pipe';
import { ConvertDateTzPipe } from '../pipes/convert-date-tz.pipe';

describe('CityWeatherComponent', () => {
  let component: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;
  let weatherServiceSpy : { getWeatherByCity : jasmine.Spy};

  const spyReturnValue = {
    name: 'London',
    main: {
      temp: 17
    },
    timezone: 3600,
    weather: [
      {
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }
    ],
    sys: {
      "sunrise": 1627445901,
      "sunset": 1627502124
    }
  }

  beforeEach(async () => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['getWeatherByCity']);

    await TestBed.configureTestingModule({
      declarations: [ CityWeatherComponent, WeatherIconPipe, ConvertDateTzPipe ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponent);
    component = fixture.componentInstance;
    component.city = {name: 'London', countryCode: 'uk'};
    weatherServiceSpy.getWeatherByCity.and.returnValue(of(spyReturnValue))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render weather card', () => {
    let title = fixture.nativeElement.querySelector('#city-title').innerText;
    expect(title).toBe('London');
  });
});
