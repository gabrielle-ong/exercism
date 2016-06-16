var Gigasecond = function (birthdate) {
  this.date = function () {
    var timePassed = birthdate.getTime() + 1000000000000
    return new Date(timePassed)
  }
}

module.exports = Gigasecond
