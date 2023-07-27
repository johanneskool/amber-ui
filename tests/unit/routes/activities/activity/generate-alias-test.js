import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | activities/activity/generate-alias', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:activities/activity/generate-alias');
    assert.ok(route);
  });
});