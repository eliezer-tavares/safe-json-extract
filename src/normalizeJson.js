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

* Normalizes JSON object keys.
*
* Normaliza chaves de objetos JSON.
*
* @param {object} obj
* @returns {object}
  */
function normalizeJson(obj) {

  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  const normalized = {};

  for (const key of Object.keys(obj)) {


    normalized[
      key.toLowerCase()
    ] = obj[key];


  }

  return normalized;
}

module.exports = normalizeJson;