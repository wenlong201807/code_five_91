/**
 * 题目 https://leetcode-cn.com/problems/lru-cache-lcci/
 * 通关 https://leetcode-cn.com/problems/lru-cache-lcci/submissions/
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = parseInt(capacity, 10);
  this.cache = {};// 数据缓存对象
  this.keys = [];// 提供k的时间访问顺序
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const idx = this.keys.indexOf(key);
  if (idx === -1) return -1;
  // 更新key访问顺序
  this.keys.push(this.keys.splice(idx, 1)[0]);
  return this.cache[key];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const idx = this.keys.indexOf(key);
  if (idx !== -1) {
    this.keys.push(this.keys.splice(idx, 1)[0]);
  } else {
    if (this.keys.length === this.capacity) {
      this.cache[this.keys.shift()] = null;
    }
    this.keys.push(key);
  }

  this.cache[key] = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */