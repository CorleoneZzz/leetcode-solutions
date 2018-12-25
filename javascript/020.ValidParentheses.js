// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var str = s.trim().replace(/\s+/g, '');
    if (!str) {
        return true;
    }
    if (str.length % 2 === 1) {
        return false;
    }
    var result = true;
    var stack = [];
    var leftParts = ['[', '{', '('];
    var rightParts = [']', '}', ')'];
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (leftParts.includes(item)) {
            stack.push(item);
        } else {
            var index = rightParts.indexOf(item);
            if (stack.length && stack[stack.length - 1] === leftParts[index]) {
                stack.pop();
            } else {
                result = false;
                break;
            }
        }
    }
    return result && !stack.length;
};
