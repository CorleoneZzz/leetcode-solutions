// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 递归
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    var first = head;
    var second = head.next;
    first.next = swapPairs(second.next);
    second.next = head;
    return second;
};