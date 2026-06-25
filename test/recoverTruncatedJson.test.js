const test =
require('node:test');

const assert =
require('node:assert');

const recoverTruncatedJson =
require('../src/recoverTruncatedJson');

test('recover missing brace', () => {

  const result =
    recoverTruncatedJson(
      '{"name":"Eliezer"'
    );

  assert.strictEqual(
    result,
    '{"name":"Eliezer"}'
  );

});