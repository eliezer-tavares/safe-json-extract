const test = require('node:test');
const assert = require('node:assert');

const repairJson =
    require('../src/repairJson');

test('repair single quotes', () => {

    const result =
        repairJson("{'name':'Eliezer'}");

    assert.strictEqual(
        result,
        '{"name":"Eliezer"}'
    );

});

test('remove trailing comma', () => {

    const result =
        repairJson('{"x":1,}');

    assert.strictEqual(
        result,
        '{"x":1}'
    );

});