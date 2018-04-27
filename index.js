var isiPromise = function (maxAmount, timeout, title, promiseLib) {
  this.freeSemaphores = maxAmount
  this.timeout = timeout
  this.title = title
  this.promiseLib = promiseLib
}

isiPromise.prototype = {
  constructor: isiPromise,

  freeSemaphores: 0,
  timeout: 0,
  title: '',
  promiseLib: undefined,

  reserveSemaphore: function () {
    var self = this

    return new self.promiseLib(function (resolve, reject) {
      var interval = undefined

      var reserve = function () {
        if (self.freeSemaphores > 0) {
          --self.freeSemaphores

          if (interval != undefined) {
            clearInterval(interval)
          }

          resolve(self.title)
          return true
        }

        return false
      }

      if (!reserve()) {
        interval = setInterval(reserve, self.timeout)
      }
    })
  },

  resolveSemaphore: function (obj) {
    var self = this
    return new self.promiseLib(function (resolve, reject) {
      ++self.freeSemaphores
      resolve(obj)
    })
  }
}

module.exports = isiPromise