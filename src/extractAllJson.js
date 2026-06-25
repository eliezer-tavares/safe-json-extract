/**
 * safe-json-extract
 *
 * Author:
 * Eliezer Tavares de Oliveira
 *
 * License:
 * MIT
 */

function extractAllJson(input) {

  if (typeof input !== 'string') {
    return [];
  }

  const results = [];

  let start = -1;
  let depth = 0;

  for (let i = 0; i < input.length; i++) {

    const char = input[i];

    if (char === '{') {

      if (depth === 0) {
        start = i;
      }

      depth++;
    }

    if (char === '}') {

      depth--;

      if (depth === 0 && start !== -1) {

        const candidate =
          input.slice(start, i + 1);

        try {

          results.push(
            JSON.parse(candidate)
          );

        } catch {}

      }

    }

  }

  return results;

}

module.exports = extractAllJson;