import { Component, OnInit } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cities: City[] = [
    { name: 'London', countryCode: 'uk'},
    { name: 'Moscow', countryCode: 'ru'},
    { name: 'Berlin', countryCode: 'de'},
    { name: 'Birmingham', countryCode: 'uk'},
    { name: 'Glasgow', countryCode: 'uk'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
