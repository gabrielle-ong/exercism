var Year = function (input) {
  this.isLeap = function(){
    if (input % 4 === 0) {
      if (input % 100 === 0) {
        if (input % 400 === 0){
          return true;
        } return false;
      } return true;
    } return false;
  }
}
module.exports = Year;
