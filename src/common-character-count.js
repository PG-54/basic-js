const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const s1Chars = {};

  for (const char of s1) {
    if (s1Chars[char]) s1Chars[char] += 1;
    else s1Chars[char] = 1;
  }

  const commonChars = {};
  for (const char of s2) {
    if (s1Chars[char]) {
      if (commonChars[char]) {
        if (commonChars[char] < s1Chars[char]) commonChars[char] += 1;
      } else {
      commonChars[char] = 1;
      }
    }
  }

  let sum = 0;
  for (const key in commonChars) {
    sum += commonChars[key];
  }

  return sum;
}
module.exports = {
  getCommonCharacterCount
};
