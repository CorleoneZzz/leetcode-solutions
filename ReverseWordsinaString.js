/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  var arr = new Array();
  var j = 0;
  var get = new Array();
  var my = "";
  arr = str.split(/\s/);
  if (arr.length == 1) {
    return arr[0]
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != "") {
        get[j] = arr[i];
        j++
      }
    }
    if (get == false) {
      return ""
    }
    for (var m = 0; m < get.length - 1; m++) {
      my = my + get[get.length - 1 - m] + " ";
    }
    my = my + get[0];
    return my
  }
}