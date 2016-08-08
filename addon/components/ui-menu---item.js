import Ember from 'ember';
import UIComponent from './ui-component';
import layout from '../templates/components/ui-menu---item';
import state from '../state';
import { task, timeout } from 'ember-concurrency';

const {
  computed,
  get,
  guidFor,
  set
} = Ember;

const UIMenuItem = UIComponent.extend({
  layout,

  active: state({ defaultValue: false }),
  collapsed: state({ defaultValue: false }),
  hover: state({ defaultValue: false }),

  targetRouteName: null,

  generatedId: computed(function() {
    return `ui-menu---item--${guidFor(this)}`;
  }),

  mouseEnter: task(function * () {
    set(this, 'active', true);
    set(this, 'hover', true);
  }),

  mouseLeave: task(function * () {
    set(this, 'hover', false);

    yield timeout(100);

    set(this, 'active', false);
  }),

  states: computed('active', 'collapsed', 'hover', function() {
    return {
      active: this.get('active'),
      collapsed: this.get('collapsed'),
      hover: get(this, 'hover')
    };
  })
});

UIMenuItem.reopenClass({
  positionalParams: ['targetRouteName']
});

export default UIMenuItem;
