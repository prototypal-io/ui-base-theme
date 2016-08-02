import FieldKit from "npm:field-kit";
import FormComponent from './form-component';

export default FormComponent.extend({
  didInsertElement() {
    // TODO Create custom date formatter
    const field = new FieldKit.TextField(this.$().find('input')[0],
                    new FieldKit.ExpiryDateFormatter());
    field.setFocusedPlaceholder('__-__');
    field.setUnfocusedPlaceholder('__-__');
  }
});
