// https://leetcode-cn.com/problems/palindrome-linked-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var list = [];
    var linkHead = head;
    var result = true;
    while (linkHead) {
        list.push(linkHead.val);
        linkHead = linkHead.next;
    }
    if (list.length < 2) {
        return true;
    }
    var mid = list.length / 2 + 1;
    for(let i = 0; i < mid; i++) {
        if (list[i] !== list[list.length - i - 1]) {
            result = false;
            break;
        }
    }
    return result;
};

module.exports = isPalindrome;
