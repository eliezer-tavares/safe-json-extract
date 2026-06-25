const test = require('node:test');
const assert = require('node:assert');

const normalizeJson =
    require('../src/normalizeJson');

test('normalize keys', () => {

    const result =
        normalizeJson({
            Name: 'Eliezer'
        });

    assert.deepStrictEqual(
        result,
        {
            name: 'Eliezer'
        }
    );

});