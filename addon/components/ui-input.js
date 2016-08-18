import Ember from 'ember';
import UIComponent from './ui-component';
import layout from '../templates/components/ui-input';

export default UIComponent.extend({
  layout,

  disabled: false,
  error: false,
  forceErrorDisplay: false,

  _wasFocused: false,
  _previousErrorState: null,

  states: Ember.computed('disabled', '_errorState', function() {
    return {
      disabled: this.get('disabled'),
      error: this.get('_errorState')
    };
  }),

  _errorState: Ember.computed('error', '_wasFocused', 'forceErrorDisplay', 'value', function() {
    const wasFocused = this.get('_wasFocused');
    const error = this.get('error');
    const forceErrorDisplay = this.get('forceErrorDisplay');
    const previousErrorState = this.get('_previousErrorState');
    let errorState = false;

    if (error && (wasFocused || previousErrorState || forceErrorDisplay)) {
      errorState = {
        hasError: true,
        message: typeof error === 'string' ? error : null
      };
    }

    return this.set('_previousErrorState', errorState);
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
