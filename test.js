var test = require('tape');
var onstop = require('./');

test('basic test', function(t) {
  var i = 0;
  var fn = onstop(1000, function() {
    t.equal(i, 4);
    t.end();
  });

  var callfn = function() {
    i++;
    fn();
  };
  setTimeout(callfn, 500);
  setTimeout(callfn, 1000);
  setTimeout(callfn, 1500);
  setTimeout(callfn, 2000);
});

test('if called after stop should call callback again', function(t) {
  var i = 0;
  var fncalls = 0;;
  var fn = onstop(1000, function() {
    if (fncalls++ === 0) return t.equal(i, 3);
    t.equal(i, 4);
    t.end();
  });

  var callfn = function() {
    i++;
    fn();
  };
  setTimeout(callfn, 500);
  setTimeout(callfn, 1000);
  setTimeout(callfn, 1500);
  setTimeout(callfn, 3200);
});

test('end', function(t) {
  t.end();
  process.exit();
});
