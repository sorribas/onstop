onstop
======

[![build status](https://secure.travis-ci.org/sorribas/onstop.png)](http://travis-ci.org/sorribas/onstop)

Detect when a recurring event has stopped happening, given a time interval.
A good example of this is [onstoptyping](https://github.com/sorribas/onstoptyping)

Usage
-----

```js
var onstop = require('onstop');

var someEventEmitter = getEventEmitterSomehow();

var fn = onstop(3000, function() { // if the event stops for 3 seconds this function gets called.
  console.log('The event stopped happening.');
});

someEventEmitter.on('myevent', fn);
```

if the event stops happening, then starts, and then stops again, the function will be called twice.

License
-------

MIT
