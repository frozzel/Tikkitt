var notifyUser = require('./notifyUser.js');

test('"notifyUser" should return the object { message: "email sent" }', function (t) {
  notifyUser('Bob', function (err, res) {
    t.deepEqual(res, { message: 'email sent' });
    t.end();
  });
});