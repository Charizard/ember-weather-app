import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

import GeoLocation from 'weather-app/services/geo-location';

export default class ApplicationController extends Controller {
  @service geoLocation!: GeoLocation;

  location!: string;
}
