import Ember from 'ember';

const { get } = Ember;

const getDefaultValue = function(component, options) {
  return options.defaultValue || false;
};

export default function state(options = {}) {
   let meta = {
    isUIState: true,
    options: options
  };

  return Ember.computed('_activeUIStates', {
    get(key) {
      return get(this._activeUIStates, key) ||
             get(this._uiStates, key) ||
             getDefaultValue(this, options);
    },

    set(key, value) {
      if (!this._uiStates) {
        this._uiStates = {};
      }

      this._uiStates[key] = value;

      return value;
    }
  }).meta(meta);
}
