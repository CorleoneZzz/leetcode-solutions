// https://leetcode-cn.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  var ans = -1;
  var len = coins.length;
  var cache = new Array(amount + 1);
  cache = cache.fill(Number.MAX_VALUE);
  cache[0] = 0;
  for (var i = 1; i <= amount; i++) {
    for (var j = 0; j < len; j++) {
      if (i >= coins[j]) {
        var cacheValue = cache[i - coins[j]];
        if (cacheValue !== Number.MAX_VALUE && (cacheValue + 1 < cache[i]))
          cache[i] = cacheValue + 1;
      }
    }
  }
  ans = cache[amount];
  if (ans === Number.MIN_VALUE || ans === Number.MAX_VALUE || ans === 0) ans = -1;
  return ans;
};
