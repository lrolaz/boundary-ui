import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rose/nav/link', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);
    await render(hbs`
      <Rose::Nav::Link @route="index">
        Item Name
      </Rose::Nav::Link>
    `);
    assert.strictEqual(find('.rose-nav-link').textContent.trim(), 'Item Name');
  });
});
