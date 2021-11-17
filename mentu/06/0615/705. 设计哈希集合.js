// 通过 https://leetcode-cn.com/problems/design-hashset/submissions/
var MyHashSet = function () {
  this.BASE = 100;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};
MyHashSet.prototype.hash = function (key) {
  return key % this.BASE;
};
/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const h = this.hash(key)
  for (const x of this.data[h]) {
    if (x === key) {
      return;
    }
  }
  this.data[h].push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const h = this.hash(key)
  const it = this.data[h];
  for (let i = 0; i < it.length; ++i) {
    if (it[i] === key) {
      it.splice(i, 1)
      return;
    }
  }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
    if (it === key) {
      return true;
    }
  }
  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */