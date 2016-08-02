import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    focusIn() {
      this.$().find('input:first').focus();
    }
  }
});
