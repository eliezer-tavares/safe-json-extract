const test = require('node:test');
const assert = require('node:assert');

const extractArray =
    require('../src/extractArray');

test('extractArray returns array', () => {

    const result =
        extractArray('abc [1,2,3] xyz');

    assert.deepStrictEqual(
        result,
        [1, 2, 3]
    );

});

test('extractArray returns null', () => {

    const result =
        extractArray('nothing');

    assert.strictEqual(
        result,
        null
    );

});