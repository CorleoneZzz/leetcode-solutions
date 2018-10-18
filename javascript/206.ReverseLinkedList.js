// https://leetcode-cn.com/problems/reverse-linked-list/

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

// 方法1： 三指针遍历链表
// 先将头元素的next指向空
// 用 next 变量存储第三个元素避免链表断掉
var reverseList1 = function(head) {
    if (!head || !head.next) {
        return head;
    }
    var first = head;
    var cur = head.next;
    var next = null;
    head.next = null;
    while(cur) {
        next = cur.next;
        cur.next = first;
        first = cur;
        cur = next;
    }
    return first;
};
// 方法2：递归
// 元素进行交替处理的思路与1类似，实现方式不同
var reverseList2 = function(head) {
    return reserveRecursivly(null, head);
};
var reserveRecursivly = function (pre, cur) {
    if (!cur) {
        return cur;
    }
    if (!cur.next) {
        cur.next = pre;
        return cur;
    }
    var next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    return reserveRecursivly(pre, cur);
}
