/**
 * safe-json-extract
 *
 * Author:
 * Eliezer Tavares de Oliveira
 *
 * Computer Engineering Student
 * UNIVESP
 *
 * License:
 * MIT
 */

const repairJson =
  require('./repairJson');

const safeParse =
  require('./safeParse');

const extractJson =
  require('./extractJson');

function parseLLMResponse(input) {

  if (typeof input !== 'string') {

    return {
      ok: false,
      repaired: false,
      sourceType: 'unknown',
      error: 'Input must be a string'
    };

  }

  const extracted =
    extractJson(input);

  if (extracted) {

    return {
      ok: true,
      repaired: false,
      sourceType: 'json',
      data: extracted
    };

  }

  const repaired =
    repairJson(input);

  const parsed =
    safeParse(repaired);

  if (parsed.ok) {

    return {
      ok: true,
      repaired: true,
      sourceType: 'repaired-json',
      data: parsed.data
    };

  }

  return {
    ok: false,
    repaired: false,
    sourceType: 'unknown',
    error: 'Unable to parse response'
  };

}

module.exports =
  parseLLMResponse;