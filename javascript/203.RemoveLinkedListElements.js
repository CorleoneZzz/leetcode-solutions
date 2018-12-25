// https://leetcode-cn.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head;
    var current = head;
    var pre = null;
    while (current) {
        if (current.val === val) {
            if (pre) {
                pre.next = current.next;
            } else {
                head = head.next;
            }
        } else {
            pre = current;
        }
        current = current.next;
    }
    return head;
};