var RecentCounter = function () {
  this.pingArray = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.pingArray.push(t);
  while (this.pingArray[0] < t - 3000) {
    this.pingArray.shift();
  }
  return this.pingArray.length;
};

/**
 * 通过 https://leetcode-cn.com/problems/number-of-recent-calls/submissions/
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// 详细版
class RecentCounter {
  constructor() {
    this.queue = [];
  }
  ping(t) {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}

// 作者：lzxjack
// 链接：https://leetcode-cn.com/problems/number-of-recent-calls/solution/dui-lie-javascript-by-lzxjack-6to4/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
