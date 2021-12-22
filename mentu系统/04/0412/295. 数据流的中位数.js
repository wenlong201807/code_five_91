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
 * 未通过 https://leetcode-cn.com/problems/find-median-from-data-stream/submissions/
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  (this.item).sort((a, b) => a - b);
  if ((this.item.length % 2 == 0)) {
    return (this.item[this.item.length / 2] + this.item[this.item.length / 2 - 1]) / 2
  }
  return this.item[(this.item.length - 1) / 2]
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */