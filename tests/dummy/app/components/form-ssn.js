import Ember from 'ember';
import FieldKit from "npm:field-kit";

export default Ember.Component.extend({
  didInsertElement() {
    const field = new FieldKit.TextField(this.$().find('input')[0],
                    new FieldKit.SocialSecurityNumberFormatter());
    field.setFocusedPlaceholder('___-__-____');
    field.setUnfocusedPlaceholder('___-__-____');
  }
});
