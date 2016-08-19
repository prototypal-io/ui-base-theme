import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['filter'],

  filter: [],

  filteredComponents: Ember.computed('filter.[]', 'model.theme.components.[]', function() {
    let components = this.get('model.theme.components');
    let filter = this.get('filter');

    if (filter.length > 0) {
      return components.filter((component) => filter.indexOf(component.name) > -1);
    } else {
      return components;
    }
  }),

  actions: {
    toggleComponentFilter(componentName) {
      let filter = this.get('filter');
      let newFilter = [].concat(filter);
      let indexOfComponentName = newFilter.indexOf(componentName);

      if (indexOfComponentName > -1) {
        newFilter.splice(indexOfComponentName, 1);
        this.set('filter', newFilter);
      } else {
        this.set('filter', newFilter.concat(componentName));
      }
    }
  }
});
