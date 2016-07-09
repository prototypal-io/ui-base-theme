import Ember from 'ember';
import layout from 'ui-base-theme/templates/components/demo--ui-dropbutton';

export default Ember.Component.extend({
  layout,
  tagName: '',

  actions: {
    edit() {
      window.alert('editing');
    },

    delete() {
      window.alert('deleting');
    },

    save() {
      window.alert('saving');
    },
  }
});
