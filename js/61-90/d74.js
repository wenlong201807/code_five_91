var MapSum = function () {
  this.root = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let node = this.root;
  for (const k of key) {
    if (!node.has(k)) node.set(k, new Map());
    node = node.get(k);
  }
  node.set('#', val);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let node = this.root;
  for (const k of prefix) {
    if (!node.has(k)) return 0;
    node = node.get(k);
  }
  return this.dfs(node);
};

MapSum.prototype.dfs = function (node) {
  let ans = 0;
  for (const k of node.keys()) {
    if (k == '#') ans += node.get(k);
    else ans += this.dfs(node.get(k));
  }
  return ans;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

// 作者：himymBen
// 链接：https://leetcode-cn.com/problems/map-sum-pairs/solution/pythonjavajavascriptgo-trie-dfs-or-bfs-b-cbmd/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
