// https://leetcode-cn.com/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    var ans = [];
    var len = s.length;
    var findPart = function (index, pre, partIndex) {
        if (partIndex === 3) {
            if (isValidPart(s.slice(index))) {
                pre.push(s.slice(index));
                ans.push(pre.join('.'));
            }
        } else {
            if (isValidPart(s.slice(index, index + 3))) {
                var num = s.slice(index, index + 3);
                findPart(index + 3, pre.concat([num]), partIndex + 1);
            }
            if (isValidPart(s.slice(index, index + 2))) {
                var num = s.slice(index, index + 2);
                findPart(index + 2, pre.concat([num]), partIndex + 1);
            }
            if (isValidPart(s.slice(index, index + 1))) {
                var num = s.slice(index, index + 1);
                findPart(index + 1, pre.concat([num]), partIndex + 1);
            }
        }
    }
    findPart(0, [], 0);
    return ans;
};

var isValidPart = function (s) {
    var num = Number(s);
    if (!s) {
        return false;
    } else if (Number(s).toString().length !== s.length) {
        return false;
    } else if (num < 0 || num > 255) {
        return false;
    }
    return true;
}
