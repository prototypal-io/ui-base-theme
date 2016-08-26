import UIComponent from './ui-component';
import layout from 'ui-base-theme/templates/components/ui-list---item';

export default UIComponent.extend({
  layout,

  theme: 'base',

  actions: {
    onclick() {
      if (this.attrs.onclick) {
        this.attrs.onclick(...arguments);
      }
    }
  }
});
