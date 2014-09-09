var chai = require('chai');
var expect = chai.expect;

var functions = require('../index');
var setReminder = functions.setReminder;

describe('setReminder()', function() {
  it('calls the callback', function(done) {
    var miliseconds = Date.now();
    var date = new Date(miliseconds + 1000);
    setReminder(date, done);
  });
});
