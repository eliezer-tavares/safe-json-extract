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

* Parses JSON safely.
*
* Faz parse de JSON sem lançar exceções.
*
* @param {string} input
* @returns {object}
  */
function safeParse(input) {

  try {


    return {
      ok: true,
      data: JSON.parse(input)
    };


  } catch (error) {


    return {
      ok: false,
      error: error.message
    };


  }

}

module.exports = safeParse;