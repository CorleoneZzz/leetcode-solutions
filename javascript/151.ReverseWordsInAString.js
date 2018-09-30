// https://leetcode-cn.com/problems/reverse-words-in-a-string/
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  // str = str.trim()
  // str = str.replace(/\s+/g, ' ') // 多空格压缩为一个
  // var arr = str.split(' ').reverse()
  // return arr.join(' ')
  var arr = str.trim().split(' ').reverse().filter(Boolean);
  return arr.join(' ');
}

module.exports = reverseWords;
