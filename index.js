
/**
 * Call a callback at a specific date to handle
 * basic reminder functionality.
 *
 * @param {Date} date The date for the reminder.
 * @param {Function} cb The callback to call.
 */
module.exports.setReminder = function(date, cb) {
  var dateMilliseconds = date.getTime();
  var nowMilliseconds = Date.now();

  var delayInMilliseconds = dateMilliseconds - nowMilliseconds;

  setTimeout(cb, delayInMilliseconds);
};
