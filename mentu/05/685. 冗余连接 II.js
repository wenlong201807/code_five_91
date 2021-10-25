/**
 * @param {number[][]} edges
 * @return {number[]}
 * 通关 https://leetcode-cn.com/problems/redundant-connection-ii/submissions/
 * 04:19:00
 * 1. 附加边指向了根节点，导致所有的节点都有一个父节点，导致出现环，
 * 2. 附加边没有指向根节点，会出现书中某个节点会有两个父节点，也有可能会出现环
 */
var findRedundantDirectedConnection = function (edges) {
  // 先要获取节点的个数，就是边的个数
  let nodeCount = edges.length;
  // 根据节点的个数构造并查集，长度加1，避免从0开始
  let uf = new UnionFind(nodeCount + 1);
  // 怎么记录产生了两个父节点
  let parent = []; // 记录每一个节点的父节点是多少
  for (let i = 0; i < (nodeCount + 1); i++) {
    parent[i] = i;// 做一个初始化
  }

  // 来记录一下是否产生了双重父节点的情况
  let conflit = -1; // 用来记录一下是否产生了双重父节点的情况
  let cycle = -1; // 产生的环路
  for (i in edges) {
    let edge = edges[i]; // 
    let node1 = edge[0], node2 = edge[1]; // 拿到了两个节点
    if (parent[node2] !== node2) { // node2 这个节点有两个父节点
      conflit = i; // 这是第几组数据，记录下来
    } else { // 否则没有双重父节点，就把他们连起来
      parent[node2] = node1;
      if (uf.findSet(node1) == uf.findSet(node2)) {
        cycle = i;
      } else {
        uf.unite(node1, node2);
      }
    }
  }

  if (conflit < 0) { // 没有双重父节点，就把环路记录下来
    return edges[cycle];// 只有环路
  } else { // 只有双重父节点
    let conflitEdge = edges[conflit];
    // 还需要判断是否有环路
    if (cycle >= 0) {
      return [parent[conflitEdge[1]], conflitEdge[1]];
    } else {
      return conflitEdge;
    }
  }

}

// 并查集按需修改的
class UnionFind {
  constructor(n) {
    this.parent = [];
    for (let i = 0; i <= n; i++) {
      this.parent[i] = i;
    }
  }
  findSet (index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.findSet(this.parent[index]);
    }
    return this.parent[index];
  }
  unite (index1, index2) { // 合并
    this.parent[this.findSet(this.parent[index1])] = this.findSet(index2);
  }
}