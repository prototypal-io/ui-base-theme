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

  actions: {
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
