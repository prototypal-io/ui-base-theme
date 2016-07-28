import Ember from 'ember';
import FieldKit from "npm:field-kit";

export default Ember.Component.extend({
  didInsertElement() {
    // TODO Create custom date formatter
    const field = new FieldKit.TextField(this.$().find('input')[0],
                    new FieldKit.ExpiryDateFormatter());
    field.setFocusedPlaceholder('__-__');
    field.setUnfocusedPlaceholder('__-__');
  }
});
