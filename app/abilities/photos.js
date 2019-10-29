import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { Ability } from 'ember-can';

export default Ability.extend({
  session: service(),
  canDestroy: computed('session.currentUser', function() {
    return this.session.hasPermission('photo.destroy');
  })
});
