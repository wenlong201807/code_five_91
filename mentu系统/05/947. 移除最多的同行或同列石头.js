/**
 * @param {number[][]} stones
 * @return {number}
 * 思路
 * 要求每一个石头的横纵坐标上，除了本身外，不能存在其他的石头。
 * 因此，可以把同一个横坐标或者纵坐标上的石头看作是一个连通的；
 * 
 * 每次获取两个石头的坐标(x,y),然后进行判断，如果两个石头处于同一个横坐标或同一个纵坐标，就进行合并，直到遍历完整个数组；
 * 每次合并完之后，就会减少一个石头，记录一下合并了多少次，合并的次数就是移除石头的个数
 */
var removeStones = function (stones) {
  let stoneNum = stones.length;
  let uf = new UnionFind(stoneNum);
  for (let i = 0; i < stoneNum; i++) { // 拿第一块石头
    for (let j = 0; j < stoneNum; j++) { // 拿第二块石头
      let [x1, y1] = stones[i];
      let [x2, y2] = stones[j];
      if (x1 === x2 || y1 === y2) {
        uf.unite(i, j);
      }
    }
  }

  // 原有的石头总数量 - 合并完的石头数量 = 剩余石头数量
  return stoneNum - uf.getCount();
};

// 并查集的模板
class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((v, i) => i);
    this.rank = new Array(n).fill(1);
    this.setCount = n; // 连通分量
  }
  findSet (index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.findSet(this.parent[index]);
    }
    return this.parent[index];
  }
  unite (index1, index2) { // 合并
    // 拿到他们的顶点坐标
    let root1 = this.findSet(index1), root2 = this.findSet(index2);
    if (root1 !== root2) {
      // 判断一下各自集合的节点个数，节点少的集合要往节点多的集合上合并
      if (root1 < root2) {
        [root1, root2] = [root2, root1]; // root1 是节点个数多的集合
      }
      // 合并根节点
      this.parent[root2] = root1;
      // 计算已经合并的节点数量
      this.rank[index1] += this.root2;
      this.setCount--; // 合并一个，城市数量减去一
    }
  }
  getCount () {
    return this.setCount;
  }
  connected (index1, index2) { // 来判断两个顶点，是否是一个连通分量
    let root1 = this.findSet(index1), root2 = this.findSet(index2);
    return root1 === root2;
  }
}