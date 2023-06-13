import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module(
  'Unit | Route | forum/categories/category/threads/thread',
  function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
      const route = this.owner.lookup(
        'route:forum/categories/category/threads/thread'
      );
      assert.ok(route);
    });
  }
);
