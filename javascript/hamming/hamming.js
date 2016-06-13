var Hamming = function () {
  this.compute = function (string1, string2) {
    var array1 = string1.split('');
    var array2 = string2.split('');
    var j = 0;
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        j += 1;
      }
    } return j;
  };
};
module.exports = Hamming;
