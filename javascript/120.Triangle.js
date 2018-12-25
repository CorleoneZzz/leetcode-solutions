// https://leetcode-cn.com/problems/triangle/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    var len = triangle.length;
    var tmp = [];
    for (var i = 0; i <= len; i++) {
        tmp[i] = [];
    }
    for (var i = 0; i <= len; i++) {
        tmp[len][i] = 0;
    }
    for (var row = len - 1; row >= 0; row--) {
        for (var col = 0; col < triangle[row].length; col++) {
            tmp[row][col] = Math.min(tmp[row + 1][col], tmp[row + 1][col + 1]) + triangle[row][col];
        }
    }
    return tmp[0][0];
};

// minimums[i][j]=data[i][j]+min(minimums[i+1][j]+minimums[i+1][j+1])