const test =
require('node:test');

const assert =
require('node:assert');

const extractAllJson =
require('../src/extractAllJson');

test('extract all json objects', () => {

  const result =
    extractAllJson(`
      {"a":1}
      text
      {"b":2}
    `);

  assert.strictEqual(
    result.length,
    2
  );

});

test('empty result', () => {

  const result =
    extractAllJson('nothing');

  assert.deepStrictEqual(
    result,
    []
  );

});