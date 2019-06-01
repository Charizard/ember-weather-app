/* eslint-disable @typescript-eslint/camelcase */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | weather-widget', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the widget details', async function(assert) {
    assert.expect(6);

    this.set('details', {
      sunrise: 1559175750,
      sunset: 1559221889,
      humidity: 52,
      pressure: 1010,
      wind_speed: 4.1
    });

    await render(hbs`<WeatherWidget @details={{details}}/>`);

    assert.equal(findAll('.weather-widget__detail').length, 5);
    assert.equal(find('[data-test-humidity]').innerHTML, this.details.humidity);
    assert.equal(find('[data-test-sunrise]').innerHTML, '5:52 AM');
    assert.equal(find('[data-test-sunset]').innerHTML, '6:41 PM');
    assert.equal(
      find('[data-test-wind-speed]').innerHTML,
      this.details.wind_speed
    );
    assert.equal(find('[data-test-pressure]').innerHTML, this.details.pressure);
  });
});
