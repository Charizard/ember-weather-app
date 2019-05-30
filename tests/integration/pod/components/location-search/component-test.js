import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, pauseTest } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | location-search', function(hooks) {
  setupRenderingTest(hooks);

  test('it displays the name of the current location', async function(assert) {
    this.set('location', 'Frankfurt, DE');

    await render(hbs`<LocationSearch @location={{location}}/>`);

    assert.equal(find('input').value, this.location);
  });
});
