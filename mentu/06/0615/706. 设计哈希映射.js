// 通过 https://leetcode-cn.com/problems/design-hashmap/submissions/
var MyHashMap = function () {
  this.BASE = 100;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

MyHashMap.prototype.hash = function (key) {
  return key % this.BASE;
};

MyHashMap.prototype.put = function (key, value) {
  const h = this.hash(key)
  for (const x of this.data[h]) {
    if (x[0] === key) {
      x[1] = value;
      return;
    }
  }
  this.data[h].push([key, value])
};

MyHashMap.prototype.get = function (key) {
  const h = this.hash(key)
  for (const x of this.data[h]) {
    if (x[0] === key) {
      return x[1];
    }
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  const h = this.hash(key)
  for (const x of this.data[h]) {
    if (x[0] === key) {
      const idx = this.data[h].indexOf(x);
      this.data[h].splice(idx, 1);
      return;
    }
  }
};
