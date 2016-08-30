import Ember from 'ember';

export default Ember.Service.extend({
  cache: {},

  lookup(base, kind, theme) {
    let identifier = `${base}--${kind}`;

    return this.get('cache')[identifier] || `${theme}--${base}--${kind}`;
  },

  register(base, kind, theme) {
    let identifier = `${base}--${kind}`;
    let cache = this.get('cache');

    cache[identifier] = `${theme}--${base}--${kind}`;

    return cache[identifier];
  }
});
