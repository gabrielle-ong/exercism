var Year = function (input) {
  this.isLeap = function () {
    // SOLUTION 1:
    if (input % 400 === 0) {
      return true;
    }
    else if (input % 4 === 0 && input % 100 !== 0) {
      return true;
    }
    else return false;

    //SOLUTION 2:
    // if (input % 4 === 0) {
    //   if (input % 100 === 0) {
    //     if (input % 400 === 0) {
    //       return true;
    //     } return false;
    //   } return true;
    // } return false;

    //SOLUTION 3: (SIMILAR TO 2)
    // if (input % 4 === 0) {
    //   if (input % 100 === 0) {
    //     if (input % 400 === 0){
    //       return true;
    //     }
    //   } else return true;
    // } return false;
  };
};
module.exports = Year;
