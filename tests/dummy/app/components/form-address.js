import FormComponent from './form-component';

export default FormComponent.extend({
  hasValue: Ember.computed.or('street', 'suite', 'zip', 'city', 'state')
});
