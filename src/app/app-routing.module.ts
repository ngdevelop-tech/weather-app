import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityForecastComponent } from './city-forecast/city-forecast.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forecast/:city', component: CityForecastComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
