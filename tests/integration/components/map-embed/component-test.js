import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | map-embed', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('coord', { lat: 0, lon: 0 });

    await render(hbs`<MapEmbed @coord={{this.coord}}/>`);

    assert.equal(findAll('iframe').length, 1);
  });
});
