import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityWeatherComponent } from '../city-weather/city-weather.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, CityWeatherComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain five cities', () => {
      expect(component.cities.length).toBe(5);
  });

  it('should render five city weather components', () => {
      fixture.detectChanges();
      let cityWeatherCards = fixture.nativeElement.querySelectorAll('app-city-weather');
      expect(cityWeatherCards.length).toBe(5);
  });
});
