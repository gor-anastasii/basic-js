const { NotImplementedError } = require("../lib");

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
  const chars = new Map();
  let counter = 0;

  for (const char of s1) {
    chars.set(char, (chars.get(char) || 0) + 1);
  }

  for (const char of s2) {
    if (chars.get(char) > 0) {
      counter++;
      chars.set(char, chars.get(char) - 1);
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
