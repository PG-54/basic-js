const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const charData = [];
  let currentChar;
  for (const char of str) {
    if (char !== currentChar) {
      currentChar = char;
      charData.push([1, char]);
      continue;
    }
    charData[charData.length - 1][0]++;
  }
  
  return charData
    .map((el) => {
      if (el[0] === 1) return el[1];
      return `${el[0]}${el[1]}`;
    })
    .join('');
}

module.exports = {
  encodeLine
};
