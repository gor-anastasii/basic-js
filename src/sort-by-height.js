const { NotImplementedError } = require("../lib");

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
  const minusOneIndexes = new Set(),
    result = [],
    heights = [];
  arr.forEach((item, index) => {
    if (item === -1) {
      minusOneIndexes.add(index);
    } else {
      heights.push(item);
    }
  });
  heights.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (minusOneIndexes.has(i)) {
      result.push(-1);
    } else {
      result.push(heights[j]);
      j++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
