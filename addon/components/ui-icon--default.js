import Ember from 'ember';
import UIKindComponent from './ui-kind';
import layout from 'ui-base-theme/templates/components/ui-icon--default';

export default UIKindComponent.extend({
  layout,

  symbol: Ember.computed('icon', function() {
    return `icons/icon-${this.get('icon')}`;
  })
});
