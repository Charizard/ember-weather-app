import Service from '@ember/service';
import fetch from 'fetch';

import config from 'weather-app/config/environment';

export default class OpenWeatherService extends Service {
  fetchCurrentWeather(coord: Coordinate) {
    return this.fetchWeather('weather', coord);
  }

  fetchForecast(coord: Coordinate) {
    return this.fetchWeather('forecast', coord);
  }

  fetchWeather(type: string, coord: Coordinate): any {
    const parseJSON = (response: any) => {
      return response.json();
    };

    return fetch(`https://${config.APP.rapid.host}/${type}?lat=${coord.latitude}&lon=${coord.longitude}&units=metric`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': config.APP.rapid.host,
        'X-RapidAPI-Key': config.APP.rapid.apiKey,
      },
    }).then(parseJSON)
    .then(this.normalizeResponse);
  }

  normalizeResponse(response: any): OpenWeatherData {
    const name = `${response.name}, ${response.sys.country}`;
    const details = {
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
      temp_max: response.main.temp_max,
      temp_min: response.main.temp_min,
      wind_speed: response.wind.speed,
    };

    return {
      coord: response.coord,
      details,
      id: response.id,
      name,
      weather: response.weather,
    };
  }
}
