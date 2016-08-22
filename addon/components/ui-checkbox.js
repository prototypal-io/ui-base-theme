import Ember from 'ember';
import UIValidated from './ui-validated';
import layout from '../templates/components/ui-checkbox';

export default UIValidated.extend({
  layout,

  disabled: false,
  value: false,

  states: Ember.computed('disabled', 'errorState', 'value', function() {
    return {
      disabled: this.get('disabled'),
      error: this.get('errorState'),
      checked: this.get('value')
    };
  })
});
