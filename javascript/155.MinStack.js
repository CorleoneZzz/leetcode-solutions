// https://leetcode-cn.com/problems/min-stack/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = undefined;
  this.values = [];
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if (this.min === undefined || x <= this.min) {
      this.values.push(x);
      this.min = x;
      this.values.push(this.min);
  } else {
      this.values.push(x);
      this.values.push(this.min);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.values.pop();
  this.values.pop();
  this.min = this.values[this.values.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.values[this.values.length -2];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min;
};

