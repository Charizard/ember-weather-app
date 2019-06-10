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

  fetchWeather(type: string, coord: Coordinate) {
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
    const { sunrise, sunset } = response.sys;
    const details = {
      ...response.main,
      sunrise,
      sunset,
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
