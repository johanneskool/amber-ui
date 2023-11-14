import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | forum/categories/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:forum/categories/new');
    assert.ok(route);
  });
});
