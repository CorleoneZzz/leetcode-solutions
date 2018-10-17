// https://leetcode-cn.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s.trim()) return true;
    var array = s.match(/[A-Za-z0-9]/ig);
    if (!array || !array.length) {
        return true;
    }
    var fromLeft = array.join('').toUpperCase();
    var fromRight = array.reverse().join('').toUpperCase();
    return fromLeft === fromRight;
};

module.exports = isPalindrome;
