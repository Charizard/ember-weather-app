import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GeoLocationService extends Service {
  @tracked status = 'waiting';
  @tracked latitude = 0;
  @tracked longitude = 0;

  public fetchCurrentCoordinates() {
    return new Promise((resolve: () => void, reject: () => void) => {
      navigator.geolocation.getCurrentPosition(this.success.bind(this, resolve), reject);
    });
  }

  private success(resolve: (coord: Coordinate) => void, position: { coords: Coordinate }) {
    this.status = 'completed';
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    resolve({
      latitude: this.latitude,
      longitude: this.longitude,
    });
  }
}
