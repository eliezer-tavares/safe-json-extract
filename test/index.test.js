const test = require('node:test');
const assert = require('node:assert');

const api =
    require('../src');

test('public api exports', () => {

    assert.strictEqual(
        typeof api.extractJson,
        'function'
    );

    assert.strictEqual(
        typeof api.extractArray,
        'function'
    );

    assert.strictEqual(
        typeof api.safeParse,
        'function'
    );

    assert.strictEqual(
        typeof api.repairJson,
        'function'
    );

    assert.strictEqual(
        typeof api.isJson,
        'function'
    );

    assert.strictEqual(
        typeof api.extractCodeBlock,
        'function'
    );

    assert.strictEqual(
        typeof api.normalizeJson,
        'function'
    );

});