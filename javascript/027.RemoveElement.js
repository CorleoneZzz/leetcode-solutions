// https://leetcode-cn.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (var i = nums.length; i >= 0; i--) {
    if (nums[i] == val) {
      nums.splice(i, 1)
    }
  }
  return nums.length;
};

module.exports = removeElement;
