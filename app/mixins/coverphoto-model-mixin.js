import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';
import DS from 'ember-data';

const { attr } = DS;

export default Mixin.create({
  coverPhoto: attr('raw'),
  coverPhotoUrl: attr('string'),
  coverPhotoUrlOrDefault: computed('coverPhotoUrl', function() {
    return this.coverPhotoUrl || '/images/fallback/coverphoto_default.jpg';
  })
});
