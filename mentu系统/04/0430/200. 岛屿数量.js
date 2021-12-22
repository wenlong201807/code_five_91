/**
 * 未通过
 * @param {character[][]} grid
 * @return {number}
 */
// 先搜索一下二维数组，如果一个位置是1，这是要判断：当前节点上下左右的位置是否为1，是的话开始合并；
// 最后出来的连通分量就是要求的岛屿数量；
// 力扣雷区
let count = 0;
var numIslands = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let uf = new UnionFind(m * n);
  // 1. 对二维数组进行搜索
  count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
      }
    }
  }
  // 2. 对当前节点的上下左右，四个方向的值进行判断
  for (let i = 0; i < m; i++) {
    for (let j = 0; i < n; j++) {
      if (grid[i][j] === '1') { // 岛屿数量 +1
        if (i - 1 >= 0 && grid[i - 1][j] === '1') { // 当前节点的上一个节点
          uf.unite(i * n + j, (i - 1) * n + j)
        }

        if (i + 1 < m && grid[i + 1][j] === '1') { // 当前节点的下一个节点
          uf.unite(i * n + j, (i + 1) * n + j)
        }

        if (j - 1 >= 0 && grid[i][j - 1] === '1') { // 当前节点的左一个节点
          uf.unite(i * n + j, i * n + j - 1)
        }

        if (j + 1 < n && grid[i][j + 1] === '1') { // 当前节点的右一个节点
          uf.unite(i * n + j, i * n + j + 1)
        }
      }
    }
  }

  return count; // 连通分量就是岛屿数量
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
      // if (this.rank[root1] < this.rank[root2]) {
      // 判断一下各自集合的节点个数，节点少的集合要往节点多的集合上合并
      if (root1 < root2) {
        [root1, root2] = [root2, root1]; // root1 是节点个数多的集合
      }
      // 合并根节点
      this.parent[root2] = root1;
      // 计算已经合并的节点数量
      this.rank[index1] += this.root2;
      // this.rank[root1] += this.rank[root2];
      this.setCount--; // 合并一个，城市数量减去一
      count--;
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