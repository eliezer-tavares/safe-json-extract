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

* Extracts the first valid JSON array from text.
*
* Extrai o primeiro array JSON válido encontrado.
*
* @param {string} input
* @returns {Array|null}
  */
function extractArray(input) {

  if (typeof input !== 'string') {
    return null;
  }

  const start = input.indexOf('[');

  if (start === -1) {
    return null;
  }

  let depth = 0;

  for (let i = start; i < input.length; i++) {


    const char = input[i];

    if (char === '[') {
      depth++;
    }

    if (char === ']') {
      depth--;
    }

    if (depth === 0) {

      const candidate =
        input.slice(start, i + 1);

      try {
        return JSON.parse(candidate);
      } catch {
        return null;
      }

    }


  }

  return null;
}

module.exports = extractArray;