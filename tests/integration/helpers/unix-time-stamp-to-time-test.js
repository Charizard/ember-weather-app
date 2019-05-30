import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | unix-time-stamp-to-time', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the time in correct format', async function(assert) {
    this.set('inputValue', 1559175750);

    await render(hbs`{{unix-time-stamp-to-time inputValue}}`);

    assert.equal(this.element.textContent.trim(), '5:52 AM');
  });
});
