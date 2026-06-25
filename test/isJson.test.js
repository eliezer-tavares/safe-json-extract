const test = require('node:test');
const assert = require('node:assert');

const isJson =
    require('../src/isJson');

test('valid json', () => {

    assert.strictEqual(
        isJson('{"x":1}'),
        true
    );

});

test('invalid json', () => {

    assert.strictEqual(
        isJson('{x:1}'),
        false
    );

});