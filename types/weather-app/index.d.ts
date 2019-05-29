import Ember from 'ember';

declare global {
  interface Coordinate {
    latitude: number;
    longitude: number;
  }

  interface LocationWeatherDetails {
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
    sunrise: number;
    sunset: number;
    wind_speed: number;
  }

  interface OpenWeatherData {
    id: number;
    coord: Coordinate;
    details: LocationWeatherDetails;
    weather: [];
    name: string;
  }

  interface WebIcon {
    label: string;
    icon: string;
  }

  interface WeatherIconConfig {
    [key: number]: WebIcon,
  }
}

export {};
