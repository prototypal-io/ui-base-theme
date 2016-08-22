import Ember from 'ember';
import UIValidated from './ui-validated';
import layout from '../templates/components/ui-input';

export default UIValidated.extend({
  layout,

  disabled: false,

  states: Ember.computed('disabled', 'errorState', function() {
    return {
      disabled: this.get('disabled'),
      error: this.get('errorState')
    };
  })
});
