const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let options = Array.from({ length: str.length }, () => str.split(''));
  for (let i = 0; i < options.length; i += 1) {
    options[i][i] = '';
  }
  options = options.map(el => Number(el.join('')));
  let max = options[0];
  for (let i = 1; i < options.length; i += 1) {
    if (max < options[i]) max = options[i];
  }
  return max;
}

module.exports = {
  deleteDigit
};
