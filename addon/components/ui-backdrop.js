import UIComponent from './ui-component';
import layout from '../templates/components/ui-backdrop';

export default UIComponent.extend({
  layout,

  actions: {
    onclick() {
      if (this.attrs.onclick) {
        this.attrs.onclick(...arguments);
      }
    }
  }
});
