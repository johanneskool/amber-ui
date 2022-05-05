import EditController from 'amber-ui/controllers/application/edit';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DestroyController extends EditController {
  @tracked destroyed = false;
  successMessage = 'Verwijderen gelukt!';
  cancelMessage = 'Verwijderen geannuleerd.';
  @tracked cancelTransitionTarget = null;
  get successTransitionModel() {
    return null;
  }

  get cancelTransitionModel() {
    return this.model;
  }

  @action
  destroyModel() {
    this.modelSaveUtil.destroyModel(this.model);
  }

  onError(error) {
    // todo: somehow incorporate the error into the message in a more robust manner?
    this.errorMessage = `Er ging iets fout bij het verwijderen: ${error}`;
  }

  transition() {
    // todo: this does not quite work everywhere, because navigating back after the transition
    if (this.destroyed) {
      this.replaceRoute(...arguments);
    } else {
      this.transitionToRoute(...arguments);
    }
  }

  submit = undefined;
}
