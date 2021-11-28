var MinStack = function () {
  this.x_stack = [];// 元素栈
  this.min_stack = [Infinity];// 辅助栈，放最小值
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.x_stack.push(val);
  // 每次都会push，但是存放的是当前最小值
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.x_stack.pop();
  this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.x_stack[this.x_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1];
};

/**
 * 通过 https://leetcode-cn.com/problems/min-stack/submissions/
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */