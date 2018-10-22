// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let results = [];
    if (!nums1.length || !nums2.length) {
        return [];
    }
    nums1.forEach((item) => {
        if (nums2.includes(item)) {
            const index = nums2.indexOf(item);
            nums2.splice(index, 1);
            results.push(item);
        }
    })
    return results;
};
