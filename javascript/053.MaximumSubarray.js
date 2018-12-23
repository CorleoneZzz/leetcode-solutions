// https://leetcode-cn.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var curSum = 0;
  var max = -Infinity;
  var len = nums.length;
  if (!len) {
      return 0;
  }
  if (len === 1) {
      return nums[0];
  }
  for (var i = 0; i < len; i++) {
      if (curSum < 0) {
          curSum = nums[i];
      } else {
          curSum += nums[i];
      }
      max = Math.max(curSum, max);
  }
  return max;
};
