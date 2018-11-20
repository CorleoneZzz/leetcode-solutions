// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var arr = s.split(' ');
  var result = [];
  arr.forEach((word) => {
      result.push(word.split('').reverse().join(''));
  })
  return result.join(' ');
};
