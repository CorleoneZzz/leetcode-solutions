// https://leetcode-cn.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    var result = false;
    if (s1.length > s2.length) {
        return false;
    }
    var skip = s1.length;
    var _s1 = s1.split('').sort().join('');
    for (var i = 0; i < s2.length - skip + 1; i++) {
        var str = s2.slice(i, i + skip);
        if (havePermutation(_s1, str)) {
            result = true;
            break;
        }
    }
    return result;
};

var havePermutation = function (s1, s2) {
    var result = true;
    for (var i = 0; i < s1.length; i++) {
        var index = s2.indexOf(s1[i]);
        if (index < 0) {
            result = false;
            break;
        }
        s2 = s2.slice(0, index) + s2.slice(index + 1);
    }
    return result;
}
