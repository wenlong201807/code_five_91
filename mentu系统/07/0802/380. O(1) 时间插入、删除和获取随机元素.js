var RandomizedSet = function () {
  this.h = {}, this.a = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  return this.h[val] === undefined && (this.a.push(val), this.h[val] = this.a.length - 1, true);
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // 正确，不容易阅读
  // return this.h[val] !== undefined && (
  //   [this.a[this.h[val]], this.a[this.a.length - 1]] = [this.a[this.a.length - 1], this.a[this.h[val]]],
  //   this.h[this.a[this.h[val]]] = this.h[val],
  //   this.a.pop(), delete (this.h[val]), true
  // )


  // this.m = new Map();
  // this.data = [];
  if (!this.m.has(val)) return false;
  let n = this.m.get(val);
  let len = this.data.length - 1;
  [this.data[n], this.data[len]] = [this.data[len], this.data[n]];
  this.m.set(this.data[n], n);
  this.data.pop();
  this.m.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.a[Math.random() * this.a.length | 0];
};

/**
 * 哈希，布隆过滤器
 * 通过 https://leetcode-cn.com/problems/insert-delete-getrandom-o1/submissions/
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */