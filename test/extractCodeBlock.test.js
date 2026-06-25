const test = require('node:test');
const assert = require('node:assert');

const extractCodeBlock =
    require('../src/extractCodeBlock');

test('extract markdown code block', () => {

    const text =
        'Text\n\n' +
        '```json\n' +
        '{"x":1}\n' +
        '```\n';

    const result =
        extractCodeBlock(text);

    assert.strictEqual(
        result.language,
        'json'
    );

});