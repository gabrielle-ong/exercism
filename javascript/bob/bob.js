var Bob = function () {}

Bob.prototype.hey = function (input) {
  if (input.trim() === '') {
    return 'Fine. Be that way!'
  }
  if (input.toUpperCase() === input && /[A-Z]/.test(input)) {
    return 'Whoa, chill out!'
  }
  if (input.slice(-1) === '?') {
    return 'Sure.'
  }
  else return 'Whatever.'
}
module.exports = Bob
