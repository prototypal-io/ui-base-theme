import UIComponent from './ui-component';
import layout from '../templates/components/ui-fieldset';

export default UIComponent.extend({
  layout,

  focus: false,

  states: Ember.computed('focus', function() {
    return {
      focus: this.get('focus')
    };
  }),

  actions: {
    onFocusIn() {
      this.set('focus', true);
    },

    onFocusOut() {
      this.set('focus', false);
    }
  }
});
