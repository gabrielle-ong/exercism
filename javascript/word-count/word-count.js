function Words () {}

Words.prototype.count = function (string) {
  var formattedString = string.trim().toLowerCase().replace(/\s+/g, ' ')
  var sortedArray = formattedString.split(' ').sort()
  var expectedCount = {}

  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i - 1]) {
      expectedCount[sortedArray[i-1]] += 1
    } else {
      expectedCount[sortedArray[i]] = 1
    }
  }
  return expectedCount
}

module.exports = Words
