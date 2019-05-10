import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service geoLocation;
  @service openWeather;

  model() {
    return this.geoLocation.fetchCurrentCoordinates().then((coords) => {
      return this.openWeather.fetchCurrentWeather(coords.latitude, coords.longitude);
    });
  }
}
