// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // return Math.min.apply(null, nums);
  if (!nums.length) {
      return -1;
  }
  if (nums.length === 1) {
      return nums[0];
  }
  var res = -1;
  var low = 0;
  var high = nums.length - 1;
  var mid = 0;
  while(nums[low] > nums[high]) {
      mid = Math.floor((low+high)/2);
      var middle = nums[mid];
      if (high - low < 2) {
          res = high;
          break;
      }
      if (middle > nums[low]) {
          low = mid;
      } else {
          high = mid;
      }
  }
  if (res > -1) {
      return nums[res];
  } else {
      return nums[low];
  }
};
