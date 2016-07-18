`use strict`
BeerSong = function () {}

BeerSong.prototype.verse = function (a, ...b) {
    var word = a === 1 ? 'bottle' : 'bottles'
    var verse = `${a} ${word} of beer on the wall, ${a} ${word} of beer.s\nTake one down and pass it around, ${a - 1} ${word} of beer on the wall.\n`
    return verse
}

BeerSong.prototype.sing = function (a, ...b) {
  var result = ''
  for (var i = a; i > 1; i--) {
    var word = a === 1 ? 'bottle' :
      'bottles'
    var verse = `${a} ${word} of beer on the wall, ${a} ${word} of beer.
Take one down and pass it around, ${a - 1}  ${word} of beer on the wall.`
    result += verse
  }
  return result
}

module.exports = BeerSong
