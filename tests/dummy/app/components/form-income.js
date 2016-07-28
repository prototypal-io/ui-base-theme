import Ember from 'ember';
import FieldKit from "npm:field-kit";

export default Ember.Component.extend({
  didInsertElement() {
    const field = new FieldKit.TextField(this.$().find('input')[0],
                    new FieldKit.NumberFormatter()
                      .setNumberStyle(FieldKit.NumberFormatter.Style.CURRENCY)
                      .setLocale('en-US')
                      .setCountryCode('US')
                      .setCurrencyCode('USD')
                      .setMaximumFractionDigits(0));
    field.setFocusedPlaceholder('$');
    field.setUnfocusedPlaceholder('$');
  }
});
