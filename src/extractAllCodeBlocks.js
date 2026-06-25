/**
 * safe-json-extract
 *
 * Author:
 * Eliezer Tavares de Oliveira
 *
 * License:
 * MIT
 */

function extractAllCodeBlocks(input) {

  if (typeof input !== 'string') {
    return [];
  }

  const regex =
    /```(\w+)?\n([\s\S]*?)```/g;

  const results = [];

  let match;

  while ((match = regex.exec(input)) !== null) {

    results.push({
      language: match[1] || '',
      content: match[2].trim()
    });

  }

  return results;

}

module.exports =
extractAllCodeBlocks;