// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  var hash = {};
  var traverseNode = function (node) {
    if (node) {
      if (hash.hasOwnProperty(node.val)) {
        hash[node.val]++
      } else {
        hash[node.val] = 1;
      }
      if (node.left) traverseNode(node.left);
      if (node.right) traverseNode(node.right);
    }
  }
  traverseNode(root);
  var ans = [];
  var max = -1;
  for (let key in hash) {
    var count = hash[key];
    if (count > max) {
      ans = [key]
      max = count;
    } else if (count === max) {
      ans.push(key);
    };
  }
  return ans;
};
