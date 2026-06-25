const test =
require('node:test');

const assert =
require('node:assert');

const extractFirstValid =
require('../src/extractFirstValid');

test('returns first valid json', () => {

  const result =
    extractFirstValid(`
      {"a":1}
      {"b":2}
    `);

  assert.deepStrictEqual(
    result,
    { a: 1 }
  );

});