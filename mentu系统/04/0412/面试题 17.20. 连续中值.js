/**
 * 通过 https://leetcode-cn.com/problems/continuous-median-lcci/submissions/
 * initialize your data structure here.
 * 最大堆，
 * 最小堆
 * 我们通过维护两个堆，一个最大堆，一个最小堆
 * 并且，最大堆的元素个数或者最小堆的个数相等，或者多1，我们要保证中位数在最大堆里面
 * 当数组元素个数是奇数，最大堆的栈顶便是中位数
 * 当数组元素个数是偶数，最大和最小堆的栈顶值相加 再除以2，便是中位数。
 * 
 * 如果要往里面加入一个新的元素，，此时元素个数便为奇数，吧最小堆的堆顶元素加到最大堆里，
 * 我们将新的元素加入队列后，队列会把最优值放栈顶。
 */
var MedianFinder = function () {
  this.item = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.item.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  (this.item).sort((a, b) => a - b);
  if ((this.item.length) % 2 == 0) {
    return (this.item[this.item.length / 2] + this.item[this.item.length / 2 - 1]) / 2
  } else {
    return this.item[(this.item.length - 1) / 2]
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */