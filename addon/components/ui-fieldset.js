import Ember from 'ember';
import UIComponent from './ui-component';
import layout from '../templates/components/ui-fieldset';

const { get, set, computed } = Ember;

export default UIComponent.extend({
  layout,

  focus: false,

  states: computed('focus', function() {
    return {
      focus: get(this, 'focus')
    };
  }),

  actions: {
    onFocusIn() {
      set(this, 'focus', true);
    },

    onFocusOut() {
      set(this, 'focus', false);
    }
  }
});
