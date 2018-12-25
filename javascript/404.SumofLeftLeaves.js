// https://leetcode-cn.com/problems/sum-of-left-leaves/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    var sum = 0;
    var plusLeftLeaf = function (root, isLeft) {
        if (!root) {
            return 0;
        }
        if (!root.left && !root.right && isLeft) {
            sum += root.val;
        }
        plusLeftLeaf(root.left, true);
        plusLeftLeaf(root.right, false);
    }
    plusLeftLeaf(root, false);
    return sum;
};
