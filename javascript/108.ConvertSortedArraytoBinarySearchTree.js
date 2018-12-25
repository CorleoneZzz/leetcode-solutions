// https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  var dfs = function(left, right) {
      if(left > right) {
          return null;
      }
      var mid = Math.floor((left+right)/2);
      var node = new TreeNode(nums[mid]);
      node.left = dfs(left, mid - 1);
      node.right = dfs(mid + 1, right);
      return node;
  }
  return dfs(0, nums.length-1);
};
