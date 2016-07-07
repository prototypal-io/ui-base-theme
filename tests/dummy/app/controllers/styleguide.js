/* globals require */
import Ember from 'ember';

let uiComponentModules = Object.keys(requirejs.entries).filter((module) => /^ui-base-theme\/components\/ui-/.test(module));
let uiComponentNames = uiComponentModules.map(m => m.replace(/^ui-base-theme\/components\//, '')).filter(m => !/--/.test(m));
Ember.A(uiComponentNames).removeObjects(['ui-component', 'ui-demo', 'ui-icon', 'ui-kind', 'ui-modal-backdrop', 'ui-modal', 'ui-panel-content', 'ui-panel-titlebar', 'ui-popup', 'ui-table-cell', 'ui-table-row', 'ui-table-layout', 'ui-table', 'ui-tooltip', 'ui-ripple', 'ui-ripple-animation', 'ui-prevent-scroll-outside']);

let kinds = ['default'];
let states = ['active', 'focus', 'disabled', 'loading', 'error'];
let allComponents = uiComponentNames.map(cn => {
  return {
    name: cn,
    kinds: kinds.slice(),
    states: states.slice()
  };
});

Ember.A(allComponents).findBy('name', 'ui-button').kinds = ['default', 'material', 'primary', 'simple'];

export default Ember.Controller.extend({
  allComponents
});
