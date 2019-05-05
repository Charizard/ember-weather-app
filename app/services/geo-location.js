import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GeoLocationService extends Service {
  @tracked status;
  @tracked latitude;
  @tracked longitude;

  constructor() {
    super(...arguments);

    this.status = 'waiting';
    this.latitude = null;
    this.longitude = null;
  }

  fetchCurrentCoordinates() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(this.success.bind(this, resolve), reject);
    });
  }

  success(resolve, position) {
    this.status = 'completed';
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    resolve({
      latitude: this.latitude,
      longitude: this.longitude
    });
  }
}
