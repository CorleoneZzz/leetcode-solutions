// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim()
  if (!s.length) return 0
  for (var i = s.length; i > 0; i--) {
    if (s[i] === ' ') {
      return s.length - i -1
    }
    if (i === 0) return s.length
  }
};