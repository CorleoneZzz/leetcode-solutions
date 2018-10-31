// https://leetcode-cn.com/problems/sqrtx/

/**
 * @param {number} x
 * @param {number} precision
 * @return {number}
 */
var mySqrt = function (x, precision) {
    if (x < 2) {
        return x;
    }
    var low = 1;
    var high = x;
    var baseline = Math.pow(10, -precision);
    while (high - low > baseline) {
        var mid = low + (high - low) / 2;
        var guess = Math.pow(mid, 2);
        if (guess === x) {
            return Number(mid).toFixed(precision);
        } else if (guess > x) {
            high = mid;
        } else if (guess < x) {
            low = mid;
        }
    }
    return Number(mid).toFixed(precision);
};

// mySqrt(4, 0)  => 2
// mySqrt(4, 1)  => 2.0
// mySqrt(5, 0)  => 2
// mySqrt(5, 1)  => 2.2
// mySqrt(5, 10) => 2.2360679774
