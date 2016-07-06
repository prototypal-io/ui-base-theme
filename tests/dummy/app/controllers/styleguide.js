import Ember from 'ember';

export default Ember.Controller.extend({
  allComponents: [
    {
      name: 'ui-button',
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
      ]
    },
    {
      name: 'ui-button-group',
      kinds: ['default'],
      states: []
    },
    {
      name: 'ui-dropbutton',
      kinds: ['default'],
      states: []
    },
    {
      name: 'ui-checkbox',
      kinds: ['default'],
      states: []
    },
    {
      name: 'ui-tabs',
      kinds: ['default'],
      states: []
    },
    {
      name: 'ui-pagination',
      kinds: ['default'],
      states: []
    }
  ]
});
