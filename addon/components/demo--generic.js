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

    this.sizes = [].concat(SIZES);
    this.activeStates = {};
    this.currentKind = 'default';
    this.kinds = ['default'];
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
