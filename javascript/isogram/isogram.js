function Isogram (string) {
  this.isIsogram = function () {
    console.log(string)
    var noSpacesString = string.replace(/-|\s+/g, '').toLowerCase()
    console.log(noSpacesString)
    for (var i = 0; i < noSpacesString.length; i++) {
      var j = noSpacesString[i]
      console.log(j + ' ' + noSpacesString.indexOf(j) + ' ' + noSpacesString.lastIndexOf(j))
      if (noSpacesString.indexOf(j) !== (noSpacesString.lastIndexOf(j))) {
        console.log('not an isogram!')
        return false
      }
    } return true
  }
}
module.exports = Isogram
