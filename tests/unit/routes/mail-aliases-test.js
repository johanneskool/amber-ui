import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mail-aliases', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:mail-aliases');
    assert.ok(route);
  });
});
