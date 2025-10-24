const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let addition = repeatWithAddition(
    options.addition, 
    options.additionSeparator, 
    options.additionRepeatTimes
  );
  let separator = '+'
  if (options.separator) separator = options.separator;
  return repeatWithAddition(
    str + addition, 
    separator, 
    options.repeatTimes)
  ;


  function repeatWithAddition(string='', separator='|', count=1) {
    let res = string;
    for (let i = 1; i < count; i++) {
      res = res + separator + string;
    }
    return res;
  }
}

module.exports = {
  repeater
};
