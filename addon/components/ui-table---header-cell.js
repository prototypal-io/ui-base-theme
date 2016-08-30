import UIComponent from './ui-component';
import layout from '../templates/components/ui-table---layout';

export default UIComponent.extend({
  actions: {
    onclick() {
      if (this.attrs.onclick) {
        this.attrs.onclick(...arguments);
      }
    }
  }
});
