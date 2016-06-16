var Bob = require('./bob.js');

describe('Bob', function() {
  var bob = new Bob();

  it('Tom-ay-to, tom-aaaah-to.', function() {
    var result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  it('WATCH OUT!', function() {
    var result = bob.hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('Does this cryogenic chamber make me look fat?', function() {
    var result = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  it('Let\'s go make out behind the gym!', function() {
    var result = bob.hey('Let\'s go make out behind the gym!');
    expect(result).toEqual('Whatever.');
  });

  it('It\'s OK if you don\'t want to go to the DMV.', function() {
    var result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.');
  });

  it('WHAT THE HELL WERE YOU THINKING?', function() {
    var result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('1, 2, 3 GO!', function() {
    var result = bob.hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('1, 2, 3', function() {
    var result = bob.hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  it('4?', function() {
    var result = bob.hey('4?');
    expect(result).toEqual('Sure.');
  });

  it('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!', function() {
    var result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('\xdcML\xc4\xdcTS!', function() {
    /* NOTE: \xc4 = Ä
             \xe4 = ä
             \xdc = Ü
             \xfc = ü
       "\xfcML\xe4\xdcTS" === "üMLäÜTS"
    */

    var result = bob.hey('\xdcML\xc4\xdcTS!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('\xfcML\xe4\xdcTS', function() {
    var result = bob.hey('\xfcML\xe4\xdcTS');
    expect(result).toEqual('Whatever.');
  });

  it('I HATE YOU', function () {
    var result = bob.hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('Ending with a ? means a question.', function() {
    var result = bob.hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  it('Wait! Hang on.  Are you going to be OK?', function () {
    var result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  it('', function () {
    var result = bob.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

   it('____', function () {
    var result = bob.hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });
});
