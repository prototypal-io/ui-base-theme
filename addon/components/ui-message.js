import UIComponent from './ui-component';
import layout from '../templates/components/ui-message';

export default UIComponent.extend({
  layout,

  theme: 'base',

  actions: {
    close() {
      // TODO animate out
      this.sendAction('onclose');
    }
  }
});
