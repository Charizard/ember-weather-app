import Service from '@ember/service';
import fetch from 'fetch';

export default class OpenWeatherService extends Service {
  fetchCurrentWeather(lat, lon) {
    return this.fetchWeather('weather', lat, lon);
  }

  fetchForecast(lat, lon) {
    return this.fetchWeather('forecast', lat, lon);
  }

  fetchWeather(type, lat, lon) {
    let parseJSON = function(response) {
      return response.json()
    };

    return fetch(`https://community-open-weather-map.p.rapidapi.com/${type}?lat=${lat}&lon=${lon}&units=metric`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': 'a1140d9a5dmsh20caf953aa5b2d9p185a77jsnf52276e095e9'
      }
    }).then(parseJSON)
    .then(this.normalizeResponse);
  }

  normalizeResponse(response) {
    let name = `${response.name}, ${response.sys.country}`;
    let details = {
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      temp_max: response.main.temp_max,
      temp_min: response.main.temp_min,
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
      wind_speed: response.wind.speed
    };

    return {
      id: response.id,
      coord: response.coord,
      details,
      weather: response.weather,
      other: response.main,
      name
    }
  }
}
