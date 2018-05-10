import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | repository-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{repository-card name='ynotdraw' stars=0 forks=0}}`);

    assert.equal(this.element.textContent.trim(), 'ynotdraw (0 stars | 0 forks)');
  });
});
