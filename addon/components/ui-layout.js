import Ember from 'ember';
import layout from 'ui-base-theme/templates/components/ui-layout';

export default Ember.Component.extend({
  layout,

  elementHeight: null,
  elementWidth: null,

  _onResize: null,

  didInsertElement() {
    const _onResize = () => {
      Ember.run.next(this, this.updateSize);
    };

    this.set('_onResize', _onResize);
    window.addEventListener('resize', _onResize, true);

    Ember.run.next(this, this.updateSize);
  },

  willDestroyElement() {
    const _onResize = this.get('_onResize');
    window.removeEventListener('resize', _onResize, true);
  },

  updateSize() {
    const element = this.get('element');

    if (!element) {
      return;
    }

    this.set('elementWidth', element.offsetWidth);
    this.set('elementHeight', element.offsetHeight);
  }
});
