import Ember from 'ember';

export default Ember.Service.extend({
  cache: {},

  init() {
    this._super(...arguments);
    this.loadTheme();
  },

  loadTheme(name) {
    let url = "/theme";
    if (name) { url += `?variant=${name}`; }
    Ember.$.getJSON(url).then(res => {
      this.set('allVariables', res);
      this.set('variables', res.slice(0, 50));
    });
  },

  resetFilter() {
    this.set('filteringBy', null);
    this.set('variables', this.get('allVariables').slice(0, 50));
  },

  filterVariablesFor(componentName) {
    this.set('filteringBy', componentName);
    let allVariables = this.get('allVariables');
    let filteredVariables = allVariables.filter(varObj => {
      return varObj.name.indexOf(componentName) !== -1;
    });
    this.set('variables', filteredVariables);
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
