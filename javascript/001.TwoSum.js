// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var result = [];
    var mapObj = {};
    nums.forEach((num, index) => {
        mapObj[num] = index;
    })
    for (var i = 0; i < nums.length; i++) {
        var first = nums[i];
        var second = target - nums[i];
        if (mapObj.hasOwnProperty(second) && mapObj[second] !== i) {
            result = [i, mapObj[second]];
            break;
        }
    }
    return result;
};
