// https://leetcode-cn.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var arr = x.toString().split('');
  return arr.reverse().join('') === x.toString();
};
