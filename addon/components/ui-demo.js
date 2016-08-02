import Ember from 'ember';
import layout from 'ui-base-theme/templates/components/ui-demo';

export default Ember.Component.extend({
  layout,
  tagName: '',

  currentKind: 'default',

  init() {
    this._super(...arguments);

    this.activeStates = {};
  },

  sizes: [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'
  ],

  demoComponentToRender: Ember.computed('demoComponent.name', function() {
    let componentName = this.get('demoComponent.name');
    let demoComponentName = `demo--${componentName}`;
    let demoComponent = Ember.getOwner(this)._lookupFactory(`component:${demoComponentName}`);

    if (demoComponent) {
      console.log(`rendering ${componentName} demo with ${demoComponentName}`);
      return demoComponentName;
    } else {
      console.log(`rendering ${componentName} demo with demo--generic`);
      return 'demo--generic';
    }
  }),

  uiStates: Ember.computed(function() {
    let owner = Ember.getOwner(this);
    let componentName = this.get('demoComponent.name');
    let componentClass = owner._lookupFactory(`component:${componentName}`);
    let uiStates = Ember.get(componentClass, 'uiStates');

    return uiStates;
  }),

  actions: {
    alert(message) {
      alert(message);
    },

    setKind(kind) {
      this.set('currentKind', kind);
    },

    setState(state) {
      let activeStates = this.get('activeStates');
      let newStates = Object.assign({}, activeStates);

      if (newStates[state]) {
        newStates[state] = false;
      } else {
        newStates[state] = true;
      }

      this.set('activeStates', newStates);
    }
  }
});
