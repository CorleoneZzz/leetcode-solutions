// https://leetcode-cn.com/problems/intersection-of-two-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    if (!nums1.length || !nums2.length) {
        return [];
    }
    nums2.forEach((item) => {
        if (nums1.includes(item) && !result.includes(item)){
            result.push(item);
        }
    })
    return result;
};
