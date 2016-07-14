`use strict`
var Hamming = function () {}

Hamming.prototype.compute = function (string1, string2) {
  count = 0
  if (string1.length !== string2.length) {
    throw Error('DNA strands must be of equal length.')
  }
  for (var i = 0; i < string1.length; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      count += 1
    }
  }
  return count
}
module.exports = Hamming
