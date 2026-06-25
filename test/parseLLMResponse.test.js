const test =
  require('node:test');

const assert =
  require('node:assert');

const parseLLMResponse =
  require('../src/parseLLMResponse');

test('parse valid response', () => {

  const result =
    parseLLMResponse(
      '{"name":"Eliezer"}'
    );

  assert.strictEqual(
    result.ok,
    true
  );

  assert.strictEqual(
    result.repaired,
    false
  );

  assert.strictEqual(
    result.sourceType,
    'json'
  );

});

test('invalid response', () => {

  const result =
    parseLLMResponse(
      'hello world'
    );

  assert.strictEqual(
    result.ok,
    false
  );

  assert.strictEqual(
    result.sourceType,
    'unknown'
  );

});