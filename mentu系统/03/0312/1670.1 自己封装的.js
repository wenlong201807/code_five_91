/**
 * 通过 https://leetcode-cn.com/problems/design-front-middle-back-queue/submissions/
 * 1670 设计前中后队列
*/

var Node = function (val) {
  this.val = val;
  this.pre = null;
  this.next = null;
}

Node.prototype.insert_pre = function (p) {
  p.next = this;
  p.pre = this.pre;
  this.pre && (this.pre.next = p);
  this.pre = p;
  return;
}

Node.prototype.insert_next = function (p) {
  p.pre = this;
  p.next = this.next;
  this.next && (this.next.pre = p);
  this.next = p;
  return;
}

Node.prototype.erase = function () {
  this.next && (this.next.pre = this.pre);
  this.pre && (this.pre.next = this.next);
  return;
}

var deQueue = function () {
  this.cnt = 0;
  this.head = new Node(-1);
  this.tail = new Node(-1);
  this.head.next = this.tail;
  this.tail.pre = this.head;
  console.log(this.head);
}

deQueue.prototype.push_back = function (value) {
  this.tail.insert_pre(new Node(value));
  this.cnt += 1;
  return;
}

deQueue.prototype.push_front = function (value) {
  this.head.insert_next(new Node(value));
  this.cnt += 1;
}

deQueue.prototype.pop_back = function () {
  let ret = this.tail.pre.val;
  if (this.cnt) {
    this.tail.pre.erase();
    this.cnt -= 1;
  }
  return ret;
}

deQueue.prototype.pop_front = function () {
  let ret = this.head.next.val;
  if (this.cnt) {
    this.head.next.erase();
    this.cnt -= 1;
  }
  return ret;
}

deQueue.prototype.front = function () {
  return this.head.next.val;
}

deQueue.prototype.back = function () {
  return this.tail.pre.val;
}

deQueue.prototype.size = function () {
  return this.cnt;
}

var FrontMiddleBackQueue = function () {
  this.q1 = new deQueue();
  this.q2 = new deQueue();
}

FrontMiddleBackQueue.prototype.maintain = function () {
  if (this.q2.size() > this.q1.size()) {
    this.q1.push_back(this.q2.pop_front());
  } else if (this.q1.size() == this.q2.size() + 2) {
    this.q2.push_front(this.q1.pop_back());
  }
  return;
}

FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.q1.push_front(val);
  this.maintain();
  return;
}

FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (this.q1.size() === this.q2.size() + 1) {
    this.q2.push_front(this.q1.pop_back());
  }
  this.q1.push_back(val);
  this.maintain();
  return;
}

FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.q2.push_back(val);
  this.maintain();
  return;
}

FrontMiddleBackQueue.prototype.popFront = function (val) {
  let ret = this.q1.pop_front(val);
  this.maintain();
  return ret;
}

FrontMiddleBackQueue.prototype.popMiddle = function (val) {
  let ret = this.q1.pop_back(val);
  this.maintain();
  return ret;
}

FrontMiddleBackQueue.prototype.popBack = function (val) {
  let ret = this.q2.size() ? this.q2.pop_back() : this.q1.pop_back();
  this.maintain();
  return ret;
}
