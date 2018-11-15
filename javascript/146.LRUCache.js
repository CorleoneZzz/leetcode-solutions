// https://leetcode-cn.com/problems/lru-cache/
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.memory = {};
  this.keyCountList = [];
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  var val = this.memory[key];
  if (val !== null) {
      var index = this.keyCountList.indexOf(key);
      this.keyCountList.splice(index, 1);
      // 最近读取的放在头部
      this.keyCountList.unshift(key);
      return val;
  }
  return -1;
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  var len = this.keyCountList.filter(Boolean).length;
  if (len === this.capacity) {
      // 容量不足 移除尾部 最近最少使用的数据值
      var last = this.keyCountList.pop();
      this.memory[last] = null;
  }
  this.memory[key] = value;
  // 新数据也放在头部
  this.keyCountList.unshift(key);
};

