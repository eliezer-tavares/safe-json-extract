const test = require('node:test');
const assert = require('node:assert');

const safeParse =
    require('../src/safeParse');

test('safeParse success', () => {

    const result =
        safeParse('{"ok":true}');

    assert.strictEqual(
        result.ok,
        true
    );

});

test('safeParse failure', () => {

    const result =
        safeParse('{bad json');

    assert.strictEqual(
        result.ok,
        false
    );

});