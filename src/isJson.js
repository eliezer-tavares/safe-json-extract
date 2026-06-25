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

* Checks if a string is valid JSON.
*
* Verifica se uma string é um JSON válido.
*
* @param {string} input
* @returns {boolean}
  */
  function isJson(input) {

if (typeof input !== 'string') {
return false;
}

try {
JSON.parse(input);
return true;
} catch {
return false;
}

}

module.exports = isJson;