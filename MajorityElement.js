/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = new Array();
    var max = 0;
    var maxCount = 0;

    for (var i=0; i<nums.length; i++) {
        //不判断是否为Undefined的话，undefined+1导致count每项都是NaN
        if(count[nums[i]] != undefined){
        count[nums[i]]= count[nums[i]]+1;
        }else{
            count[nums[i]] =1
        }
        if(count[nums[i]] > nums.length/2){
            maxCount = count[nums[i]];
            max = nums[i];
        }
    }
    return max;
};