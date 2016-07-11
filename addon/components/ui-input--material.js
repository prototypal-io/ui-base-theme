import Ember from 'ember';
import UIKindComponent from './ui-kind';
import layout from 'ui-base-theme/templates/components/ui-input--material';

export default UIKindComponent.extend({
  layout,

  focus: false,

  hidePlaceholder: Ember.computed.or('focus', 'value'),

  actions: {
    focusIn() {
      this.set('focus', true);
    },

    focusOut() {
      this.set('focus', false);
    }
  }
});
