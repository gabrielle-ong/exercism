function Words () {}

Words.prototype.count = function (string) {
  // //SOLUTION 1 - credits to @giftofjehovah
  var formattedArray = string.trim().toLowerCase().split(/\s+/)
  var expectedCount = formattedArray.reduce(function (previous, current) {
    previous.hasOwnProperty(current) ? previous[current]++ : previous[current] = 1
    return previous
  }, {})

  // // SOLUTION 2 - credits to me!
  // var sortedArray = formattedArray.sort()
  // var expectedCount = {}
  //
  // for (var i = 0; i < sortedArray.length; i++) {
  //   if (sortedArray[i] === sortedArray[i - 1]) {
  //     expectedCount[sortedArray[i - 1]] += 1
  //   } else {
  //     expectedCount[sortedArray[i]] = 1
  //   }
  // }

  // // SOLUTION 3 (WITHOUT SORTING) - credits to @fay2wk
  // var sortedArray = formattedArray.sort()
  // var expectedCount = {}
  //
  // for (var i = 0; i < sortedArray.length; i++) {
  // var j = sortedArray[i]
  //   if (expectedCount[j] == null) {
  //     expectedCount[j] = 1
  //   } else {
  //       expectedCount[j]++
  //   }
  // }
  return expectedCount
}

module.exports = Words
