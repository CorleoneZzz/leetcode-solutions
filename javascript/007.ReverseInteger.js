// https://leetcode-cn.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var arr = x.toString().split('');
  var result = 0;
  var safeMin = -Math.pow(2, 31);
  var safeMax = Math.pow(2, 31) - 1;
  if (x < 0) {
      arr.shift();
  }
  result = Number(arr.reverse().join(''));
  result = x < 0 ? -result : result;
  if (result < safeMin || result > safeMax) {
      return 0;
  }
  return result;
};
