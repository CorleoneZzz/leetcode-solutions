// https://leetcode-cn.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  var ans = 0;
  var hash = {};
  nums.forEach((num) => {
      hash[num] = true;
  })
  nums.forEach((num, index) => {
      if (!hash.hasOwnProperty(num + 1)) {
          var idx = num;
          var count = 0;
          while(hash.hasOwnProperty(idx)) {
              count++;
              idx--;
          }
          ans = Math.max(count, ans);
      }
  })
  return ans;
};
