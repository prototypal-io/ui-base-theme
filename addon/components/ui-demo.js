import Ember from 'ember';
import layout from 'ui-base-theme/templates/components/ui-demo';

const assign = Object.assign;

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

  actions: {
    alert(message) {
      alert(message);
    },

    setKind(size) {
      this.set('currentKind', size);
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
