const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const negativeOnesIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) negativeOnesIndexes.push(i);
  }
  negativeOnesIndexes.reverse();
  const sorted = [...arr.sort((a, b) => b - a)];
  for (let i = 0; i < negativeOnesIndexes.length; i++) {
    sorted.pop();
  }

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === negativeOnesIndexes[negativeOnesIndexes.length - 1]) {
      res.push(-1);
      negativeOnesIndexes.pop();
    } else {
      res.push(sorted.pop());
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
