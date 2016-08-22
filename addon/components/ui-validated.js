import Ember from 'ember';
import UIComponent from './ui-component';

export default UIComponent.extend({
  error: false,
  displayError: 'auto',

  _forceShowError: Ember.computed.equal('displayError', 'always'),
  _forceHideError: Ember.computed.equal('displayError', 'never'),

  _wasFocused: false,
  _previousErrorState: null,

  errorState: Ember.computed('error', 'value', '_wasFocused', '_forceShowError', '_forceHideError', function() {
    if (this.get('_forceHideError')) {
      return false;
    }

    const wasFocused = this.get('_wasFocused');
    const error = this.get('error');
    const forceShowError = this.get('_forceShowError');
    const previousErrorState = this.get('_previousErrorState');

    if (error && (wasFocused || previousErrorState || forceShowError)) {
      return this.set('_previousErrorState', {
        hasError: true,
        message: typeof error === 'string' ? error : null
      });
    }

    return false;
  }),

  actions: {
    onFocusIn() {
      this.set('_wasFocused', false);

      if (this.attrs.onFocusIn) {
        this.attrs.onFocusIn();
      }
    },

    onFocusOut() {
      this.set('_wasFocused', true);

      if (this.attrs.onFocusOut) {
        this.attrs.onFocusOut();
      }
    }
  }
});
