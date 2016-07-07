/* globals require */
import Ember from 'ember';

let uiComponentModules = Object.keys(requirejs.entries)
  .filter((module) => /^ui-base-theme\/components\/ui-/.test(module));

let uiComponentNames = uiComponentModules
  .map(m => m.replace(/^ui-base-theme\/components\//, ''))
  .filter(m => !/--/.test(m));

Ember.A(uiComponentNames).removeObjects([
  'ui-component',
  'ui-demo',
  'ui-dropbutton-trigger',
  'ui-icon',
  'ui-kind',
  'ui-modal',
  'ui-modal-backdrop',
  'ui-panel-content',
  'ui-panel-titlebar',
  'ui-popup',
  'ui-prevent-scroll-outside',
  'ui-ripple',
  'ui-ripple-animation',
  'ui-table',
  'ui-table-cell',
  'ui-table-layout',
  'ui-table-row',
  'ui-tooltip'
]);

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
