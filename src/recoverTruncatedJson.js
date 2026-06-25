/**
 * Attempts to recover truncated JSON.
 */

function recoverTruncatedJson(input) {

  if (typeof input !== 'string') {
    return input;
  }

  const opens =
    (input.match(/{/g) || []).length;

  const closes =
    (input.match(/}/g) || []).length;

  if (opens > closes) {

    return input +
      '}'.repeat(opens - closes);

  }

  return input;

}

module.exports =
recoverTruncatedJson;