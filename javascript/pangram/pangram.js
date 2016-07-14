Pangram = function (input) {
  this.input = input
}

Pangram.prototype.isPangram = function () {
  var formattedString = this.input.toLowerCase()
  var answer = [...'abcdefghijklmnopqrstuvwxyz'].every((x) => formattedString.includes(x))
  return answer
}

module.exports = Pangram
