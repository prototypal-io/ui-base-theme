import Ember from 'ember';
import UIComponent from './ui-component';
import layout from '../templates/components/ui-input';

export default UIComponent.extend({
  layout,

  disabled: false,
  error: false,
  displayError: 'auto',

  forceShowError: Ember.computed.equal('displayError', 'always'),
  forceHideError: Ember.computed.equal('displayError', 'never'),

  _wasFocused: false,
  _previousErrorState: null,

  states: Ember.computed('disabled', '_errorState', function() {
    return {
      disabled: this.get('disabled'),
      error: this.get('_errorState')
    };
  }),

  _errorState: Ember.computed('error', '_wasFocused', 'forceShowError', 'forceHideError', 'value', function() {
    if (this.get('forceHideError')) {
      return false;
    }

    const wasFocused = this.get('_wasFocused');
    const error = this.get('error');
    const forceShowError = this.get('forceShowError');
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
