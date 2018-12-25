// https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/

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
var findSecondMinimumValue = function(root) {
  var ans = [];
  var traverseNode = function(node) {
      if (node) {
          if (!ans.includes(node.val)) {
              ans.push(node.val);
          }
          traverseNode(node.left);
          traverseNode(node.right);
      }
  }
  traverseNode(root);
  ans = ans.sort((a,b) => a-b);
  return ans[1] || -1;
};
