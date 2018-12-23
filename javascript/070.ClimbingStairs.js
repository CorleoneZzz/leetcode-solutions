// https://leetcode-cn.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var memory = {
    2: 2,
    1: 1
  };
  return function(n) {
      if (memory[n] !== undefined) {
        return memory[n]
      }
      memory[n] = climbStairs(n-1) + climbStairs(n-2);
      return memory[n];
  }
}();
