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