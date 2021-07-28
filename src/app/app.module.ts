import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CityForecastComponent } from './city-forecast/city-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { ConvertDateTzPipe } from './pipes/convert-date-tz.pipe';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityForecastComponent,
    CityWeatherComponent,
    ConvertDateTzPipe,
    WeatherIconPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
