import Ember from 'ember';
import layout from '../templates/components/demo--generic';

const SIZES = [
  'x-small',
  'small',
  'medium',
  'large',
  'x-large'
];

export default Ember.Component.extend({
  layout,
  tagName: '',

  init() {
    this._super(...arguments);

    if (!this.kinds) {
      this.kinds = ['default'];
    }

    if (!this.sizes) {
      this.sizes = [].concat(SIZES);
    }

    this.activeStates = {};
    this.currentKind = 'default';
  },

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
