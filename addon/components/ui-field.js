import Ember from 'ember';
import UIComponent from './ui-component';
import layout from '../templates/components/ui-field';

export default UIComponent.extend({
  layout,

  type: 'input',
  focus: false,

  generatedInputId: Ember.computed(function() {
    return `${Ember.guidFor(this)}--input`;
  }),

  generatedLabelId: Ember.computed(function() {
    return `${Ember.guidFor(this)}--label`;
  }),

  input: Ember.computed('type', function() {
    return `ui-${this.get('type')}`;
  }),

  states: Ember.computed('disabled', 'focus', function() {
    return {
      disabled: this.get('disabled'),
      focus: this.get('focus')
    };
  }),

  actions: {
    onFocusIn() {
      this.set('focus', true);

      if (this.attrs.onFocusIn) {
        this.attrs.onFocusIn();
      }
    },

    onFocusOut() {
      this.set('focus', false);

      if (this.attrs.onFocusOut) {
        this.attrs.onFocusOut();
      }
    }
  }
});
