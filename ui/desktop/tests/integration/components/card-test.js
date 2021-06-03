import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Card />`);
    assert.ok(find('.credentials-card'));
  });

  test('it renders with content', async function (assert) {
    await render(hbs`
      <Card as |card|>
        <card.header></card.header>
        <card.body></card.body>
        <card.footer></card.footer>
      </Card>
    `);

    assert.ok(find('.credentials-card'));
    assert.ok(find('.credentials-card-header'));
    assert.ok(find('.credentials-card-body'));
    assert.ok(find('.credentials-card-footer'));
  });
});
