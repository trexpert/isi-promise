Promise extensions and helpers
==============================

Methods
-------
- [contructur](#contructur)
- [reserveSemaphore](#reserveSemaphore)
- [resolveSemaphore](#resolveSemaphore)

### contructur()
**contructur(maxAmount, timeout, title, promiseLib)**

Options:
- maxAmount: used to set the amount of promise instances which can run at the same time
- timeout: used to define an interval to retry get a new slot to run a promise
- title: title of the promise helper instance. useful to identify the current instance
- promiseLib: put in your favorite promise lib
 
description comes here

### How to use()
**reserveSemaphore()** and **resolveSemaphore()**

Example:

```js
var IsiPromiseCl = require('isi-promise');
var isiprom = new IsiPromiseCl(5, 50, );

for(var i = 0; i < 500; ++i){
    isiprom.reserveSemaphore()
    .then [... do your staff here ...]
    .then( isiprom.resolveSemaphore.bind(isiprom) );
}

```
