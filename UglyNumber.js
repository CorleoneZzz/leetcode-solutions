/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 0) return false
  var testNums = [2, 3, 5]
  for (var i = 0; i < 3; i++) {
    while (num % testNums[i] === 0) {
      num = num / testNums[i]
    }
  }
  return num === 1
};