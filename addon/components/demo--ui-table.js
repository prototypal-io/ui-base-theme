import Ember from 'ember';
import layout from 'ui-base-theme/templates/components/demo--ui-table';

export default Ember.Component.extend({
  layout,

  sortBy: 'name',

  data: [
    { 'id': 184583, 'name': 'Jaco Joubert', 'email': 'jaco@example.com' },
    { 'id': 292393, 'name': 'Zach Aysan', 'email': 'aysan-zach@example.com' },
    { 'id': 239374, 'name': 'Erik Bryn', 'email': 'erik@example.com' }
  ]
});
