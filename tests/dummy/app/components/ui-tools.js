import Ember from 'ember';
import layout from '../templates/components/ui-tools';

export default Ember.Component.extend({
  uiTheme: Ember.inject.service(),
  layout,

  leftWidth: 60,
  rightWidth: 35,

  actions: {
    toggle() {
      if (this.get('leftWidth') === 100) {
        this.setProperties({leftWidth: 60, rightWidth: 40});
      } else {
        this.setProperties({leftWidth: 100, rightWidth: 0});
      }
    },

    save() {
      let themeVars = this.get('uiTheme.variables');
      let themeJSON = {};
      themeVars.forEach(v => {
        themeJSON[v.name] = v.value;
      });
      Ember.$.ajax("/theme", {
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(themeJSON)
      });
    }
  }
});
