// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var len = nums.length;
    var duplicateCount = 0;
    if (len < 2) {
        return len;
    }
    for (var i = len - 2; i >= 0; i--) {
        if (nums[i] === nums[i + 1]) {
            duplicateCount++;
            nums.splice(i, 1);
        }
    }
    return len - duplicateCount;
};
