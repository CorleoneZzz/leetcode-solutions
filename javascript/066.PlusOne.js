// https://leetcode-cn.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var num = Number(digits.join('')) + 1;
    if (Number.isSafeInteger(num)) {
        return num.toString().split('').map(Number);
    } else {
        var result = [];
        var len = digits.length;
        var add = 0;
        digits[len - 1] = digits[len - 1] + 1;
        for (var i = len - 1; i > -1; i--) {
            var sum = digits[i] + add;
            result[i] = sum % 10;
            add = Math.floor(sum / 10);
        }
        if (add) {
            result.unshift(add);
        }
        return result;
    }
};
