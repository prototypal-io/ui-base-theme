import Ember from 'ember';
import UIComponent from './ui-component';
import layout from 'ui-base-theme/templates/components/ui-button';

export default UIComponent.extend({
  layout,

  disabled: false,
  loading: false,
  focus: false,
  browserActive: false,
  active: false,

  isDisabled: Ember.computed.or('disabled', 'loading'),

  states: Ember.computed('isDisabled', 'loading', 'active', 'browserActive', 'focus', function() {
    return {
      disabled: this.get('isDisabled'),
      loading: this.get('loading'),
      active: this.get('browserActive') || this.get('active'),
      focus: this.get('focus')
    }
  }),

  group: Ember.computed('buttonGroup.[]', function() {
    if (Ember.isEmpty(this.get('buttonGroup'))) {
      return null;
    }

    return {
      isFirstChild: this.get('buttonGroup.firstChild') === this,
      isLastChild: this.get('buttonGroup.lastChild') === this
    };
  }),

  $(sel) {
    let el = this._renderNode.firstNode.nextElementSibling;
    return sel ? $(sel, el) : $(el);
  },

  didInsertElement() {
    this.$().on('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', () => {
      this.toggleProperty('browserActive');
    });

    this.$().on('focusin', () => {
      this.set('focus', true);
    });

    this.$().on('focusout', () => {
      this.set('focus', false);
    });

    if (this.attrs.register) {
      Ember.run.next(this, function() {
        this.attrs.register(this);
      });
    }
  },

  actions: {
    onclick(event) {
      this.sendAction('onclick');
    }
  }
});
