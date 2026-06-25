const test = require('node:test');
const assert = require('node:assert');

const extractJson =
  require('../src/extractJson');

test('extractJson returns object', () => {

  const result =
    extractJson('abc {"name":"Eliezer"} xyz');

  assert.deepStrictEqual(
    result,
    { name: 'Eliezer' }
  );

});

test('extractJson returns null', () => {

  const result =
    extractJson('no json here');

  assert.strictEqual(
    result,
    null
  );

});