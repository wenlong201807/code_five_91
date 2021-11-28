var StockSpanner = function () {
  this.stack = [];
  this.count = 0;// 计数器
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  while (this.stack.length && price >= this.stack[this.stack.length - 1].value) {
    this.stack.pop();
  }
  let tmp = this.stack.length ? this.stack[this.stack.length - 1].index : 0;
  this.count++;
  this.stack.push({
    index: this.count,
    value: price,
  })

  return this.count - tmp;
};

/**
 * 通过 https://leetcode-cn.com/problems/online-stock-span/submissions/
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */