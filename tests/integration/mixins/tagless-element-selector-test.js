import Ember from 'ember';
import TaglessElementSelectorMixin from 'ui-base-theme/mixins/tagless-element-selector';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

const { Component } = Ember;

moduleForComponent('Integration | Mixin | tagless element selector', {
  integration: true
});

test('it selects the correct elements', function(assert) {
  let component;

  this.register('component:foo-component', Component.extend(
    TaglessElementSelectorMixin, {

    tagName: '',

    layout: hbs`
        <div class="top-level">
        <div class="child">
          <div class="nested-child"></div>
        </div>
      </div>
    `,

    init() {
      this._super(...arguments);
      component = this;
    }
  }));

  this.render(hbs`{{foo-component}}`);

  assert.ok(component.$().hasClass('top-level'), 'top level element found');
  assert.ok(component.$('.child').length, 'child element found');
  assert.ok(component.$('.nested-child'), 'nested child element found');
});

test('it skips text nodes when finding element node', function(assert) {
  let component;

  this.register('component:foo-component', Component.extend(
    TaglessElementSelectorMixin, {

    tagName: '',

    layout: hbs`



        <div class="top-level"></div>
    `,

    init() {
      this._super(...arguments);
      component = this;
    }
  }));

  this.render(hbs`{{foo-component}}`);

  assert.ok(component.$().hasClass('top-level'), 'top level element found');
});

test('it skips comments when finding element node', function(assert) {
  let component;

  this.register('component:foo-component', Component.extend(
    TaglessElementSelectorMixin, {

    tagName: '',

    layout: hbs`{{!-- comment --}}<div class="top-level"></div>`,

    init() {
      this._super(...arguments);
      component = this;
    }
  }));

  this.render(hbs`{{foo-component}}`);

  assert.ok(component.$().hasClass('top-level'), 'top level element found');
});

test('it skips comments when finding element node', function(assert) {
  let component;

  this.register('component:foo-component', Component.extend(
    TaglessElementSelectorMixin, {

    tagName: '',

    layout: hbs`{{!-- comment --}}<div class="top-level"></div>`,

    init() {
      this._super(...arguments);
      component = this;
    }
  }));

  this.render(hbs`{{foo-component}}`);

  assert.ok(component.$().hasClass('top-level'), 'top level element found');
});
