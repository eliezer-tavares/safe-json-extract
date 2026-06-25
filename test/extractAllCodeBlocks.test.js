const test =
require('node:test');

const assert =
require('node:assert');

const extractAllCodeBlocks =
require('../src/extractAllCodeBlocks');

test('extract multiple blocks', () => {

  const text =
'```json\n{"a":1}\n```\n\n```js\nconst x=1;\n```';

  const result =
    extractAllCodeBlocks(text);

  assert.strictEqual(
    result.length,
    2
  );

});