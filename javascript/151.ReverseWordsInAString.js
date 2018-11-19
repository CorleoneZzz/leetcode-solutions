// https://leetcode-cn.com/problems/reverse-words-in-a-string/
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  var arr = str.trim().split(' ').reverse().filter(Boolean);
  return arr.join(' ');
}

module.exports = reverseWords;
