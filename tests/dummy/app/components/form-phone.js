import Ember from 'ember';
import FieldKit from "npm:field-kit";

export default Ember.Component.extend({
  didInsertElement() {
    const field = new FieldKit.TextField(this.$().find('input')[0],
                    new FieldKit.PhoneFormatter());
    field.setFocusedPlaceholder('(___) ___-____');
    field.setUnfocusedPlaceholder('(___) ___-____');
  }
});
