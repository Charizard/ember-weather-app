/* eslint-disable unicorn/prevent-abbreviations */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | weather-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the weather data', async function(assert) {
    this.set('weatherData', {
      name: 'Frankfurt, DE',
      other: { temp: 20 },
      weather: [{ id: 200, description: 'moderate clouds' }],
      details: {},
      coord: {}
    });

    await render(hbs`<WeatherCard @weatherData={{this.weatherData}}/>`);

    assert.equal(find('[data-test-current-temp]').innerHTML, '20°C');
    assert.equal(find('[data-test-location-name]').innerHTML, 'Frankfurt, DE');
  });
});
