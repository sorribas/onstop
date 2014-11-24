module.exports = function(time, fn) {
  var timeout, last;

  var ontimeout = function() {
    var diff = Date.now() - last;
    if (diff > time) {
      timeout = null;
      return fn();
    }
    timeout = setTimeout(ontimeout, Math.max(diff, 100));
  };

  return function() {
    last = Date.now();
    if (!timeout) timeout = setTimeout(ontimeout, time);
  };
};
