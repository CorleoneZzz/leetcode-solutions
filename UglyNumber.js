/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    //排除 负数不是UglyNumber
    if(num <1){
        return false
    }else{
    //1是UglyNumber
    if(num == 1){
        return true
    }else{
    //逐步用2，3，5因子除尽num，若最后结果无其它数字，则为UglyNumber    
    while(num % 2 == 0)
        num /= 2;
    while(num % 3 == 0)
        num /= 3;
    while(num % 5 == 0)
        num /= 5;
    return (num == 1) ? true : false;
}
    }
};