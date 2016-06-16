var DnaTranscriber = function () {

  // SOLUTION 1: USING .replace()
  this.toRna = function (string) {
    // Translate DNA to RNA
    // Order Matters. A->U must be before T -> Y -> A
    // G -> C
    // C -> X -> G
    // A -> U
    // T -> Y -> A
    var temporary = string.replace(/C/g, 'X').replace(/T/g, 'Y')
    var RNA = temporary.replace(/G/g, 'C').replace(/X/g, 'G').replace(/A/g, 'U').replace(/Y/g, 'A')
    return RNA
  }

  // SOLUTION 2:
  // this.dnaInfo = {
  //   G: 'C',
  //   C: 'G',
  //   A: 'U',
  //   T: 'A'
  // }
  // this.toRna = function (dna) {
  //   var dnaArray = dna.split('')
  //   var _this = this
  //   var rnaArray = dnaArray. function (dna) {
  //     // if we put this, it refers to the object calling the method which is dnaArray. dnaArray.dnaInfo doesnt exist. therefore, had to assign _this outside the .map function scope, to assign it to be the object calling the toRna function (dnaTranscriber)
  //     return _this.dnaInfo[dna]
  //   })
  //   var rna = rnaArray.join('')
  //   return rna
  // }

// SOLUTION 3:
// var rna = ""
// for (var i=0; i<dna.length; i++) {
//   if (dna[i] == 'G') rna += 'C'
//   if (dna[i] == 'C') rna += 'G'
//   if (dna[i] == 'T') rna += 'A'
//   if (dna[i] == 'A') rna += 'U'
// }
// return rna
}

module.exports = DnaTranscriber
