import Ember from 'ember';
import FieldKit from "npm:field-kit";

export default Ember.Component.extend({
  actions: {
    focusIn() {
      this.$().find('input:first').focus();
    }
  }
});
