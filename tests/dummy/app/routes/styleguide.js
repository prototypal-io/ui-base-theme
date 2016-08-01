import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      theme: this.get('ajax').request('/__ui/themes').then((data) => {
        return data[0];
      })
    });
  }
});
