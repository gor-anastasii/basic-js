const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  const error = new Error("Invalid date!");

  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw error;
  }

  if (date.hasOwnProperty("toString") && !date.hasOwnProperty("setMonth")) {
    throw error;
  }

  const month = date.getMonth();

  if (month <= 1 || month === 11) {
    return "winter";
  }

  if (month <= 4) {
    return "spring";
  }

  if (month <= 7) {
    return "summer";
  }

  return "autumn";
}

module.exports = {
  getSeason,
};
