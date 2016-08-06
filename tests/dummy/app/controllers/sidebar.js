import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: ['isSidebarCollapsed'],

  isSidebarCollapsed: false,

  actions: {
    toggleSidebar() {
      this.toggleProperty('isSidebarCollapsed');
    }
  }
});
