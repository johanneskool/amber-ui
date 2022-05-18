import Controller from '@ember/controller';
import ModelSaveUtil from 'amber-ui/utils/model-save';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EditController extends Controller {
  //todo: refactor to octane style
  @service('flash-notice') flashNotice;

  @tracked errorMessage = null;

  successMessage = 'Wijzigen gelukt!';
  successTransitionTarget = null;
  successTransitionModel = null;

  constructor() {
    super(...arguments);
    this.modelSaveUtil = new ModelSaveUtil(this);
  }

  @action
  submit() {
    this.modelSaveUtil.saveModel(this.model);
  }
}
