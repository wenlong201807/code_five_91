var FrontMiddleBackQueue = function () {
  this.leftArray = [];
  this.rightArray = [];// 主队列
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {// 一致
  this.leftArray.unshift(val);
  if (this.leftArray.length > this.rightArray.length) {
    this.rightArray.unshift(this.leftArray.pop());
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {// 一致
  if (this.leftArray.length === this.rightArray.length) {
    this.rightArray.unshift(val);
  } else {
    this.leftArray.push(val);
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.rightArray.push(val);
  if (this.leftArray.length + 1 < this.rightArray.length) {
    this.leftArray.push(this.rightArray.shift());
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (!this.rightArray.length) return -1;
  if (!this.leftArray.length) return this.rightArray.shift();
  let ret = this.leftArray.shift();
  if (this.leftArray.length + 1 < this.rightArray.length) {
    this.leftArray.push(this.rightArray.shift());
  }
  return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {// 一致
  if (!this.rightArray.length) return -1;
  if (!this.leftArray.length) return this.rightArray.shift();
  if (this.rightArray.length === this.leftArray.length) {
    return this.leftArray.pop();
  }
  return this.rightArray.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {// 一致
  if (!this.rightArray.length) return -1;
  if (!this.leftArray.length) return this.rightArray.shift();
  let ret = this.rightArray.pop();
  if (this.rightArray.length < this.leftArray.length) {
    this.rightArray.unshift(this.leftArray.pop());
  }
  return ret;
};

/**
 * 通过 https://leetcode-cn.com/problems/design-front-middle-back-queue/submissions/
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */