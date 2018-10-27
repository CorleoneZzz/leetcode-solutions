// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  var smaller = [];
  var larger = [];
  var pivot = nums[parseInt(nums.length / 2)];
  var pivotCnt = 0;

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];

    if (num > pivot) {
      larger.push(num);
    } else if (num < pivot) {
      smaller.push(num);
    } else {
      // maybe multiple equal elements
      pivotCnt++;
    }
  }

  if (k <= larger.length) {
    return findKthLargest(larger, k);
  } else if (k - larger.length - pivotCnt <= 0) {
    return pivot;
  } else {
    return findKthLargest(smaller, k - larger.length - pivotCnt);
  }
};
