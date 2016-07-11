import Ember from 'ember';

export default Ember.Service.extend({
  cache: {},

  init() {
    this._super(...arguments);
    Ember.$.getJSON("/theme").then(res => {
      this.set('variables', res.slice(0, 50));
    })
  },

  lookup(base, kind, theme) {
    let identifier;

    if (theme) {
      identifier = `${theme}--${base}--${kind}`;
    } else {
      identifier = `${base}--${kind}`;
    }

    return this.get('cache')[identifier] || identifier;
  },

  register(base, kind, theme) {
    let identifier = `${base}--${kind}`;
    let cache = this.get('cache');

    if (theme) {
      cache[identifier] = `${theme}--${base}--${kind}`;
    } else {
      cache[identifier] = `${base}--${kind}`;
    }

    return cache[identifier];
  }
});
