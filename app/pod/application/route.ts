import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import GeoLocation from 'weather-app/services/geo-location';
import OpenWeather from 'weather-app/services/open-weather';
import ApplicationController from './controller';

export default class ApplicationRoute extends Route {
  @service geoLocation!: GeoLocation;
  @service openWeather!: OpenWeather;

  model() {
    return this.geoLocation.fetchCurrentCoordinates().then((coord: Coordinate) => {
      return this.openWeather.fetchCurrentWeather(coord);
    });
  }

  setupController(this: ApplicationRoute, controller: ApplicationController, model: OpenWeatherData) {
    this._super(controller, model);

    set(controller, 'model', model);
    set(controller, 'location', get(model, 'name'));
  }
}
