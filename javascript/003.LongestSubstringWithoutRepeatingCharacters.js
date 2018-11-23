// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  if (len < 2) {
      return len;
  }
  var start = 0;
  var ans = 0;
  for (var i = 1; i < len; i++) {
      var item = s[i];
      var index = s.lastIndexOf(item, i - 1);
      if (index > -1) {
          ans = Math.max(ans, i - start);
          start = Math.max(start, index + 1);
      }
  }
  ans = Math.max(ans, len - start);
  return ans;
};
