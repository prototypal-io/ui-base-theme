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

const { or } = computed;

const UIMenuItem = UIComponent.extend({
  layout,

  active: state({ defaultValue: false }),
  collapsed: state({ defaultValue: false }),
  hover: state({ defaultValue: false }),

  activeOrSubMenuActive: or('active', 'subMenu.active'),

  menu: null,
  subMenu: null,
  targetRouteName: null,


  init() {
    this._super(...arguments);

    if (this.attrs.registerWithMenu) {
      Ember.run.next(this, () => {
        this.attrs.registerWithMenu(this);
      });
    }
  },

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

  states: computed('activeOrSubMenuActive', 'collapsed', 'hover', function() {
    let derp = this.get('activeOrSubMenuActive');
    console.log('wat', derp, ' Active: ', this.get('active'), ' Subactive: ', this.get('subMenu.active'));
    return {
      active: derp,
      collapsed: get(this, 'collapsed'),
      hover: get(this, 'hover')
    };
  }),

  actions: {
    registerSubMenu(subMenu) {
      set(this, 'subMenu', subMenu);
    }
  }
});

UIMenuItem.reopenClass({
  positionalParams: ['targetRouteName']
});

export default UIMenuItem;
