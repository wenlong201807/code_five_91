/**
 * 通过 https://leetcode-cn.com/problems/design-circular-queue/submissions/
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = Array(k + 1);
  this.front = 0; // 队首索引
  this.rear = 0; // 队尾索引
  this.max = k; // 当前最大值
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.queue[this.rear] = value;
  this.rear = (this.rear + 1) % (this.max + 1);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.front = (this.front + 1) % (this.max + 1);
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  return this.queue[(this.rear + this.max) % (this.max + 1)];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return ((this.rear - this.front + this.max + 1) % (this.max + 1)) == 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return ((this.rear - this.front + this.max + 1) % (this.max + 1)) == this.max;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// 详解版 
// 时间复杂度：O(1)。该数据结构中，所有方法都具有恒定的时间复杂度。
// 空间复杂度：O(N)，其中 N 是队列的预分配容量。循环队列的整个生命周期中，都持有该预分配的空间
// tailIndex = (headIndex + count − 1) % capacity
// 其中 capacity 是数组长度，count 是队列长度，headIndex 和 tailIndex 分别是队首 head 和队尾 tail 索引。
var MyCircularQueue = function(k) {
  this.capacity = k; // 容量
  this.queue = [];
  this.headIndex = 0; // 队列头部
  this.count = 0; // 队列长度
};

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  this.queue[(this.headIndex + this.count) % this.capacity] = value;
  this.count++;
  return true;
};

MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  // 删掉一个元素，直接把头指针向右移动1位(+1)即可，为了防止头部指针大于容器长度，这里取余
  this.headIndex = (this.headIndex + 1) % this.capacity;
  this.count--;
  return true;
};

MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1;
  return this.queue[this.headIndex];
};

MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1;
  // 获取队尾，tailIndex=(headIndex+count−1) % capacity
  const tailIndex = (this.headIndex + this.count - 1) % this.capacity;
  return this.queue[tailIndex];
};

MyCircularQueue.prototype.isEmpty = function() {
  return (this.count == 0);
};

MyCircularQueue.prototype.isFull = function() {
  return (this.count == this.capacity);
};

// 作者：zxhnext
// 链接：https://leetcode-cn.com/problems/design-circular-queue/solution/she-ji-xun-huan-dui-lie-shu-zu-shi-xian-7125y/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

