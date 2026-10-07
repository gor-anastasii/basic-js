const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    let tmpArr = domains[i].split(".").reverse();
    let key = "";
    tmpArr.forEach((item) => {
      key = key + "." + item;
      if (Object.hasOwn(obj, key)) {
        obj[key]++;
      } else {
        obj[key] = 1;
      }
    });
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
