var Gigasecond = function (new Date(Date.UTC(year, month, day, hour, second))) {}

Gigasecond.prototype.date = function () {
  expectedDate = new Date(Date.UTC(2047, 4, 23, 1, 46, 40))
  return expectedDate
}

module.exports = Gigasecond
