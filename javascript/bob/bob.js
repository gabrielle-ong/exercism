//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function (input) {

  if (input.trim() === '') {
    return 'Fine. Be that way!';
  }

//all caps is most specific
//input === .toUpperCase input =>  'Whoa, chill out!'

//end with ? => 'Sure.'
//ALLCAPS? is shouting
//for whoa chill out, must test that contains letters if not 1,2,3 ; 4? ; and '   ' will return true
  if (input.slice(-1) === '?') {
    if (input.toUpperCase() === input && /[A-Z]/.test(input)) {
      return 'Whoa, chill out!';
    }
    return 'Sure.';
  }

  if (input.toUpperCase() === input && /[A-Z]/.test(input)) {
    return 'Whoa, chill out!';
  }

  else return 'Whatever.';

};

module.exports = Bob;
