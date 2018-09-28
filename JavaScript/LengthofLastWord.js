// https://leetcode-cn.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var arr = s.split(' ').filter(Boolean);
  if (!arr.length) {
    return 0;
  }
  return arr[arr.length - 1].length;
};
module.exports = lengthOfLastWord;
