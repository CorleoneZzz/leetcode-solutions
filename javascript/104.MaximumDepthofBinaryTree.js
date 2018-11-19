// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

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
var max;

function depthPlus(root, depth) {
  if (!root) {
    // not exist, update max
    max = Math.max(max, depth);
    return;
  }
  // there node exist, depth plus one
  depthPlus(root.left, depth + 1);
  depthPlus(root.right, depth + 1);
}
