import DemoGeneric from './demo--generic';
import layout from 'ui-base-theme/templates/components/demo--ui-button';

export default DemoGeneric.extend({
  layout,

  kinds: [
    'default',
    'material',
    'primary',
    'simple'
  ],

  states: [
    'active',
    'focus',
    'disabled',
    'loading'
  ],
});
