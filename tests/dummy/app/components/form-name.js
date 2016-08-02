import Ember from 'ember';
import FormComponent from './form-component';

export default FormComponent.extend({
  hasValue: Ember.computed.or('firstName', 'middleName', 'lastName')
});
