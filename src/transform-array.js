const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ('\'arr\' parameter must be an instance of the Array!');
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if ((i === 0 || i === arr.length-1) && (['--double-next', '--double-prev', '--discard-next', '--discard-prev'].includes(arr[i]))) continue;
    if (arr[i] === '--double-next') {
      res.push(arr[i+1]);
    } else if (arr[i] === '--double-prev') {
      if (res[res.length-1] !== 'discarded') {
        res.push(arr[i-1])
      };
    } else if (arr[i] === '--discard-next') {
      res.push('discarded');
      i++;
    } else if (arr[i] === '--discard-prev') {
      res.pop();
    } else {
      res.push(arr[i]);
    };
  }
  return res.filter(e => e !== 'discarded');
}

module.exports = {
  transform
};
