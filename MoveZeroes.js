/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var myindex = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[myindex]=nums[i];
            myindex++;
        }
    }
    for(;myindex<nums.length;myindex++){
        nums[myindex]=0
    }
    
};