var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (string) {

//Translate DNA to RNA
// Order Matters. A->U must be before T -> Y -> A
//G -> C
//C -> X -> G
//A -> U
//T -> Y -> A

  var temporary = string.replace(/C/g, 'X').replace(/T/g, 'Y');

  var RNA = temporary.replace(/G/g, 'C').replace(/X/g, 'G').replace(/A/g, 'U').replace(/Y/g, 'A');

  return RNA;
};

module.exports = DnaTranscriber;
