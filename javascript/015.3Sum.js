// https://leetcode-cn.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let ans = []
  let len = nums.length
  for (let i = 0; i < len; i++ ) {
    if (i && nums[i] === nums[i - 1]) continue
    let target = -nums[i]
    let [start, end] = [i + 1, len - 1]
    while (start < end) {
      let sum = nums[start] + nums[end];
      if (sum > target) {
        end--;
      } else if (sum < target) {
        start++;
      } else {
        ans.push([nums[i], nums[start], nums[end]]);
        // 若相邻元素相等，直接跳过
        while (nums[start] === nums[start + 1]) {
            start++;
        }
        while (nums[end] === nums[end - 1]) {
            end--;
        }
        // 常规循环递增
        start++;
        end--;
      }
    }
  }

  return ans
};
