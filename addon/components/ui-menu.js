import Ember from 'ember';
import UIComponent from './ui-component';
import layout from '../templates/components/ui-menu';
import state from '../state';

const { computed } = Ember;

export default UIComponent.extend({
  layout,

  active: state({ defaultValue: false }),
  collapsed: state({ defaultValue: false }),

  states: Ember.computed('active', 'collapsed', function() {
    return {
      active: this.get('active'),
      collapsed: this.get('collapsed')
    };
  })
});
