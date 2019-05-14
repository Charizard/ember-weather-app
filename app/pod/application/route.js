import Route from '@ember/routing/route';
import { set, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service geoLocation;
  @service openWeather;

  model() {
    return this.geoLocation.fetchCurrentCoordinates().then((coords) => {
      return this.openWeather.fetchCurrentWeather(coords.latitude, coords.longitude);
    });
  }

  setupController(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    set(controller, 'model', model);
    set(controller, 'location', get(model, 'name'));
  }
}
