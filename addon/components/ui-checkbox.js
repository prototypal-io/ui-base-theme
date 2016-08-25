import Ember from 'ember';
import UIValidated from './ui-validated';
import layout from '../templates/components/ui-checkbox';
import state from '../state';

export default UIValidated.extend({
  layout,

  disabled: state({ defaultValue: false }),
  focused: state({ defaultValue: false }),

  value: false,

  theme: 'base',

  states: Ember.computed(
    'disabled',
    'errorState',
    'focused',
    'hover',
    'value',
  function() {
    return {
      checked: this.get('value'),
      disabled: this.get('disabled'),
      enabled: !this.get('disabled'),
      error: this.get('errorState'),
      focused: this.get('focused'),
      hover: this.get('hover')
    };
  }),

  actions: {
    onFocusIn() {
      this._super(...arguments);

      this.set('focused', true);
    },

    onFocusOut() {
      this._super(...arguments);

      this.set('focused', false);
    },

    onMouseEnter() {
      this._super(...arguments);

      this.set('hover', true);
    },

    onMouseLeave() {
      this._super(...arguments);

      this.set('hover', false);
    }
  }
});
