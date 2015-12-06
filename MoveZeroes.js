/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //把数组中非零数字提前
    var myindex = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[myindex]=nums[i];
            myindex++;
        }
    }
    //把剩余位置都设为零
    for(;myindex<nums.length;myindex++){
        nums[myindex]=0
    }
    
};