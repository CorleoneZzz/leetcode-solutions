// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var ans = [];
  if (!root) {
      return ans;
  }
  var nodes = [root];
  while(nodes.length) {
      var layer = [];
      var nextNodes = [];
      nodes.forEach((node) => {
          layer.push(node.val);
          if(node.left) nextNodes.push(node.left);
          if(node.right) nextNodes.push(node.right);
      })
      ans.push(layer);
      nodes = nextNodes;
  }
  return ans;
};
