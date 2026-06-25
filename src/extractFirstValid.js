const extractAllJson =
require('./extractAllJson');

function extractFirstValid(input) {

  const list =
    extractAllJson(input);

  if (list.length === 0) {
    return null;
  }

  return list[0];

}

module.exports =
extractFirstValid;