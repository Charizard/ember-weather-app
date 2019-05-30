import Component from '@glimmer/component';
import weatherIcons from 'weather-app/utils/weather-icon';

export default class WeatherCardComponent extends Component {
  get icon(): string {
    const prefix = 'wi wi-';
    const code = this.args.weatherData.weather[0].id;
    const icon = weatherIcons[code].icon;

    let iconName = '';

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      iconName = `day-${icon}`;
    }

    // Finally tack on the prefix.
    return prefix + iconName;
  }
}
