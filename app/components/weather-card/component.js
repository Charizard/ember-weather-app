import Component from '@glimmer/component';
import weatherIcons from 'weather-app/utils/weather-icon';

export default class WeatherCardComponent extends Component {
  get icon() {
    var prefix = 'wi wi-';
    var code = this.args.weatherData.weather[0].id;
    var icon = weatherIcons[code].icon;

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = 'day-' + icon;
    }

    // Finally tack on the prefix.
    return prefix + icon;
  }
}
