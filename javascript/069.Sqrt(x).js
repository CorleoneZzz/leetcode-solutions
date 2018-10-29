// https://leetcode-cn.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) {
      return x;
  }
  var low = 1;
  var high = x;
  while (low <= high) {
      var mid = Math.floor(low + (high - low)/2);
      var guess = Math.pow(mid, 2);
      var guessPlus = Math.pow(mid+1, 2);
      if (guess === x) {
          return mid;
      } else if (guess < x && guessPlus > x ) {
          return mid;
      } else if (guess > x) {
          high = mid - 1;
      } else if (guess < x) {
          low = mid + 1;
      }
  }
};
