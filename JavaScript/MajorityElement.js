// https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0]
    var count = new Array()
    for (var i = 0, len = nums.length; i < len; i++) {
      if (!count[nums[i]]) {
        count[nums[i]] = 1
      } else {
        count[nums[i]]++
        if (count[nums[i]] > len / 2) return nums[i]
      }
    }
};