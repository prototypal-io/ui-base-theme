import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { run } = Ember;

moduleForComponent('ui-button--primary', 'Integration | Component | ui button  primary', {
  integration: true
});

test('it renders the correctly prefixed class names', function(assert) {
  this.render(hbs`
    {{#ui-button kind="primary" size="x-small"}}
      foo
    {{/ui-button}}
  `);

  let $button = this.$('.base--ui-button--primary');

  run(() => $button.trigger('focusin'));

  assert.ok($button, 'transformed main component class');
  assert.ok($button.hasClass('ui-font-size--x-small'), 'didnt transform font-size class');
  assert.ok($button.hasClass('base--ui-button--primary--focus'), 'transformed mustache statement');
  assert.ok($button.find('.base--ui-button--primary--wrapper').length, 'transformed child element class');
});
