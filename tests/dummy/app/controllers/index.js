import Ember from 'ember';

export default Ember.Controller.extend({
  showMessage: true,
  name: null,
  showErrors: 'auto',

  isInvalidName: Ember.computed('name', function() {
    const value = this.get('name');

    if (!value || value.length < 3) {
      return 'Must be at least 3 characters long';
    }
  }),

  actions: {
    toggleMessage() {
      this.toggleProperty('showMessage');
    },

    save() {
      window.alert('saving');
    },

    showErrors(value) {
      this.set('showErrors', value);
    }
  }
});
