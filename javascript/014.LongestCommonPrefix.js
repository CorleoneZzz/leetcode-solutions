// https://leetcode-cn.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length || !strs[0]) {
      return '';
  }
  var ans = '';
  var baseStr = strs[0];
  for(var i = 0; i < baseStr.length; i++) {
      var str = baseStr[i];
      if (strs.some((s) => s.slice(i, i+1) !== str)) {
          break;
      } else {
          ans += str;
      }
  }
  return ans;
};
