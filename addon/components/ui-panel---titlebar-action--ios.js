import Ember from 'ember';
import UIKindComponent from './ui-kind';
import layout from '../templates/components/ui-panel---titlebar-action--ios';

export default UIKindComponent.extend({
  layout,

  location: 'previous',

  isPrevious: Ember.computed.equal('location', 'previous')
});
