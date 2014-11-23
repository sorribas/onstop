module.exports = function(time, fn) {
  var timeout;
  var last;
  var lastf;

  var ontimeout = function() {
    if (Date.now() - last > time && last !== lastf) {
      lastf = last;
      fn();
    }
    setTimeout(ontimeout, time)
  };

  return function() {
    last = Date.now();
    if (!timeout) timeout = setTimeout(ontimeout, time);
  };
};
