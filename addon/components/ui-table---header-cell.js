import UIComponent from './ui-component';

export default UIComponent.extend({
  actions: {
    onclick() {
      if (this.attrs.onclick) {
        this.attrs.onclick(...arguments);
      }
    }
  }
});
