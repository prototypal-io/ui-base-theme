import Ember from 'ember';

export default Ember.Component.extend({
  wasFocused: false,

  actions: {
    focusIn() {
      this.$().find('input:first').focus();
      this.set('wasFocused', true);
    }
  }
});
