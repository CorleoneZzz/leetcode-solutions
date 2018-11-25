// https://leetcode-cn.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    var arr = path.split('/').filter(Boolean);
    for (var i = 0; i < arr.length; i++) {
        var s = arr[i];
        if (s === '..' && arr[i - 1]) {
            arr.splice(i - 1, 2);
            i -= 2;
        } else if (s === '.') {
            arr.splice(i, 1);
            i--;
        }
    }
    if (arr.length && arr[0] === '..') {
        return '/' + arr.slice(1).join('/');
    }
    return '/' + arr.join('/');
};
