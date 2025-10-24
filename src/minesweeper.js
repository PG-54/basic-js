const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const colLen = matrix.length;
  const rowLen = matrix[0].length;
  const mineField = Array.from({length: colLen}, () => {
    return Array.from({length: rowLen}, () => 1);
  });

  for (let i = 0; i < colLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      if (matrix[i][j]) continue;

      let bombs = 0;

      const topInReach = i - 1 >= 0;
      const bottomInReach = i + 1 < colLen;
      const leftInReach = j - 1 >= 0;
      const rightInReach = j + 1 < rowLen;

      if (leftInReach) {
        if (matrix[i][j-1]) bombs++;
      }
      if (rightInReach) {
        if (matrix[i][j+1]) bombs++;
      }
      if (topInReach) {
        if (matrix[i-1][j]) bombs++;
      }
      if (bottomInReach) {
        if (matrix[i+1][j]) bombs++;
      }
      if (topInReach && leftInReach) {
        if (matrix[i-1][j-1]) bombs++;
      }
      if (topInReach && rightInReach) {
        if (matrix[i-1][j+1]) bombs++;
      }
      if (bottomInReach && leftInReach) {
        if (matrix[i+1][j-1]) bombs++;
      }
      if (bottomInReach && rightInReach) {
        if (matrix[i+1][j+1]) bombs++;
      }
      mineField[i][j] = bombs;
    }
  }
  return mineField;
}
module.exports = {
  minesweeper
};
