// 参考学习 https://blog.csdn.net/weixin_43804496/article/details/115284776

/*
实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false
思路：一个作为存储栈，另一个作为辅助栈
*/
var MyQueue = function () {
  this.stack = [];
  this.helpStack = [];
};

MyQueue.prototype.push = function (x) {
  while (this.stack.length !== 0) {
    this.helpStack.push(this.stack.pop());
  }

  this.helpStack.push(x); // 队列特点: 后进后出， 刚添加过来的，最后出

  while (this.helpStack.length !== 0) {
    this.stack.push(this.helpStack.pop());
  }
};

MyQueue.prototype.pop = function () {
  return this.stack.pop();
};

MyQueue.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};
