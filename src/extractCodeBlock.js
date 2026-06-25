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

* Extracts the first Markdown code block.
*
* Extrai o primeiro bloco de código Markdown.
*
* @param {string} input
* @returns {object|null}
  */
  function extractCodeBlock(input) {

if (typeof input !== 'string') {
return null;
}

const regex =
/`(\w+)?\n([\s\S]*?)`/;

const match = input.match(regex);

if (!match) {
return null;
}

return {
language: match[1] || '',
content: match[2].trim()
};
}

module.exports = extractCodeBlock;