/**
 * 题目 https://leetcode-cn.com/problems/satisfiability-of-equality-equations/
 * 通过 https://leetcode-cn.com/problems/satisfiability-of-equality-equations/submissions/
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let size = equations.length;
  let uf = new UnionFind(26);
  // 第一次骚猫
  for (let str of equations) {
    if (str.charAt(1) === '=') {
      uf.unite(str.charCodeAt(0) - 97, str.charCodeAt(3) - 97);
    }
  }
  // 第二次扫描
  for (let str of equations) {
    if (str.charAt(1) === '!') {
      if (uf.findSet(str.charCodeAt(0) - 97) === uf.findSet(str.charCodeAt(3) - 97)) {
      // if (uf.connected(str.charCodeAt(0) - 97, str.charCodeAt(3) - 97)) {
        return false;
      }
    }
  }

  return true;
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