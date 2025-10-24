const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const accamulator = [0]; 
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        accamulator.push(this.calculateDepth(arr[i]));
      }
    }
    return 1 + Math.max(...accamulator);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
