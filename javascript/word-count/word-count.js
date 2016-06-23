function Words () {}

Words.prototype.count = function (string) {
  // //SOLUTION 1 - credits to @giftofjehovah
  var formattedArray = string.trim().toLowerCase().split(/\s+/)
  // var expectedCount = formattedArray.reduce(function (previous, current) {
  //   previous.hasOwnProperty(current) ? previous[current]++ : previous[current] = 1
  //   return previous
  // }, {})

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

  // //SOLUTION 4 - credits to @redswift
  // // Take the first index and compare with all other index, then second index and compare with all other indexes ...
  var expectedCount = {}
  for (var i = 0; i < formattedArray.length; i++) {
   var counter = 0
   console.log('i 1 ' + formattedArray[i])
   for (var r = 0; r < formattedArray.length; r++) {
     console.log('r 2 ' + formattedArray[r])
     if (formattedArray[i] === formattedArray[r]) counter++
     expectedCount[formattedArray[i]] = counter
   }
   console.log(expectedCount)
 }
  return expectedCount
}

module.exports = Words
