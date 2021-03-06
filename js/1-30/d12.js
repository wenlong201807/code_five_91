// 题目 https://leetcode-cn.com/problems/lru-cache/

// 参考 https://leetcode-cn.com/problems/lru-cache/solution/146-lru-huan-cun-ji-zhi-shuang-xiang-lian-biao-ha-/
// 参考学习2 https://leetcode-cn.com/problems/lru-cache/solution/146-lruli-yong-js-mapshun-xu-cha-ru-de-fang-fa-by-/

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    let val = this.map.get(key);
    if (val === undefined) return -1;

    this.map.delete(key); // 因为被用过一次，原有位置删除
    this.map.set(key, val); // 放入最下面表示最新使用
    return val;
  }

  put(key, val) {
    if (this.map.has(key)) this.map.delete(key); // 如果有，删除

    this.map.set(key, val); // 放到最下面表示最新使用

    if (this.map.size > this.capacity) {
      // 这里有个知识点
      // map的entries方法，还有keys方法(可以看mdn))，会返回一个迭代器
      // 迭代器调用next也是顺序返回，所以返回第一个的值就是最老的，找到并删除即可
      this.map.delete(this.map.entries().next().value[0]);
    }
  }
}
// https://release3-www.yesauto.co.uk/buy/rankinglist?pvareaid=6851486&makeName=Mercedes-Benz&isNew=1&stockId=1783852&makeId=570&modelId=154&bodyStyle=Hatchback&detailPrice=2490&dataTypeId=10&type=price&price=0-5000