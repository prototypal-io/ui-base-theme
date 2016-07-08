/* globals requirejs */
import Ember from 'ember';

const COMPONENT_BLACKLIST = [
  'ui-component',
  'ui-demo',
  'ui-dropbutton-trigger',
  'ui-icon',
  'ui-input',
  'ui-field',
  'ui-kind',
  'ui-loading',
  'ui-modal',
  'ui-modal-backdrop',
  'ui-panel-content',
  'ui-panel-titlebar',
  'ui-popup',
  'ui-prevent-scroll-outside',
  'ui-ripple',
  'ui-ripple-animation',
  'ui-table-cell',
  'ui-table-layout',
  'ui-table-row'
];

let uiComponentModules = Object.keys(requirejs.entries)
  .filter((module) => /^ui-base-theme\/components\/ui-/.test(module));

let uiComponentNames = uiComponentModules
  .map(m => m.replace(/^ui-base-theme\/components\//, ''))
  .filter(m => !/--/.test(m));

let componentCustomizations = {
  'ui-button': {
    kinds: ['default', 'material', 'primary', 'simple'],
    states: ['active', 'disabled', 'focus', 'loading']
  }
};

Ember.A(uiComponentNames).removeObjects(COMPONENT_BLACKLIST);

let kinds = ['default'];
let states = [];
// let states = ['active', 'focus', 'disabled', 'loading', 'error'];

let allComponents = uiComponentNames.map((componentName) => {
  let attrs = { name: componentName, kinds: kinds.slice(), states: states.slice() };
  let customizations = componentCustomizations[componentName];

  if (customizations) {
    return Object.assign(attrs, customizations);
  } else {
    return attrs;
  }
});

export default Ember.Controller.extend({
  allComponents
});
