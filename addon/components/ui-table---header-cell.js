import Ember from 'ember';
import UIComponent from './ui-component';

export default UIComponent.extend({
  classes: Ember.computed('class', function() {
    return {
      class: this.get('class')
    };
  }),

  actions: {
    onclick() {
      if (this.attrs.onclick) {
        this.attrs.onclick(...arguments);
      }
    }
  }
});
