/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  let num = this.popStack.pop();
  this.popStack.push(num); // 这里不是真的删除掉，只是获取第一个，需要把他放回去
  return num;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.pushStack.length && !this.popStack.length;
};

/**
 * 通过 https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/submissions/
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */