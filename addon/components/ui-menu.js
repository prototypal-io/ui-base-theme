import Ember from 'ember';
import UIComponent from './ui-component';
import layout from '../templates/components/ui-menu';
import state from '../state';

const { computed } = Ember;

export default UIComponent.extend({
  layout,

  collapsed: state({ defaultValue: false }),

  activeMenuItems: Ember.computed.filterBy('menuItems', 'active', true),
  active: Ember.computed.notEmpty('activeMenuItems'),

  init() {
    this._super(...arguments);

    this.menuItems = Ember.A([]);

    if (this.attrs.registerWithMenuItem) {
      Ember.run.next(this, () => {
        this.attrs.registerWithMenuItem(this);
      });
    }
  },

  states: Ember.computed('active', 'collapsed', function() {
    return {
      active: this.get('active'),
      collapsed: this.get('collapsed')
    };
  }),

  actions: {
    registerMenuItem(menuItem) {
      this.get('menuItems').pushObject(menuItem);
    }
  }
});
