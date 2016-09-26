import Ember from 'ember';
import layout from '../templates/components/ui-component';
import TaglessElementSelectorMixin from 'ui-base-theme/mixins/tagless-element-selector';

const UIComponent = Ember.Component.extend(
  TaglessElementSelectorMixin, {

  uiTheme: Ember.inject.service(),

  layout,
  tagName: '',
  theme: 'base',

  kind: 'default',
  size: 'medium',

  init() {
    this._super(...arguments);

    this.uiPrefix = this._debugContainerKey.split(':')[1];
    this._activeUIStates = new Ember.Object();
    this._uiStates = {};
  },

  didReceiveAttrs() {
    this._super(...arguments);

    let _activeStates = this.get('_activeStates');

    if (_activeStates) {
      this.set('_activeUIStates', _activeStates);
    }
  },

  classes: Ember.computed('class', 'size', function() {
    return {
      class: this.get('class'),
      size: `ui-font-size--${this.get('size')}`
    };
  }),

  frame: Ember.computed('uiPrefix', 'kind', 'theme', function() {
    return this.get('uiTheme').lookup(
      this.get('uiPrefix'),
      this.get('kind'),
      this.get('theme')
    );
  })
});

UIComponent.reopenClass({
  uiStates: Ember.computed(function() {
    let map = {};

    this.eachComputedProperty((name, meta) => {
      if (meta.isUIState) {
        meta.name = name;
        map[name] = meta;
      }
    });

    return map;
  }).readOnly()
});

export default UIComponent;
