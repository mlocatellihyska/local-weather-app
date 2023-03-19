import { Component } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

  current: ICurrentWeather
  constructor () {
    this.current = {
      city: 'Redmond',
      country: 'US',
      date: new Date(),
      image: '',
      temperature: 45,
      description: 'Mostly cloudy'
    }

  }
}
