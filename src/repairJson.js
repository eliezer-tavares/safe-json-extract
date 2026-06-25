/**

* safe-json-extract
*
* Author:
* Eliezer Tavares de Oliveira
*
* License:
* MIT
  */

/**

* Attempts to repair common JSON mistakes.
*
* Tenta corrigir erros comuns de JSON.
*
* @param {string} input
* @returns {string}
  */
function repairJson(input) {

  if (typeof input !== 'string') {
    return '';
  }

  return input


    // single quotes
    .replace(/'/g, '"')

    // trailing commas
    .replace(/,\s*([}\]])/g, '$1')

    // remove markdown fences
    .replace(/```json\s*/gi, '')
    .replace(/```/g, '')

    .trim();


}

module.exports = repairJson;