import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | application-loading', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:application-loading');
    assert.ok(route);
  });
});
