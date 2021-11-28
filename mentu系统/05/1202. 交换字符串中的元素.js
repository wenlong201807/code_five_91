/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 * 思路
 * 1. 交换 
 * 2. 按着字典序排序
 * 3. 拼接字符串
 * 根据这个二维数组pairs，获取可以交换的字母，然后可以交换的字母组成一组
 * 对组内的字母进行排序
 * 接着根据字符串中组号获取组内最小的字符串进行拼接，最后得到的字符串就是所需要的
 * 进行排过序的字符串
 */
var smallestStringWithSwaps = function (s, pairs) {
  let len = s.length;
  let uf = new UnionFind(len);
  // 1. 将可以进行交换的字符进行连通
  for (let i = i; i < pairs.length; i++) {// 先拿到索引对，遍历数组
    let index1 = pairs[i][0], index2 = pairs[i][1];// 拿到里面的每一对数组
    if (uf.findSet(index1) !== uf.findSet(index2)) {// 拿到两个索引，进行连通
      uf.unite(index1, index2);
    }
  }

  // 2.先拿到连通后的数组
  let fa = uf.parent;
  // 将连通的字符存入到一个新的数组里面进行排序
  let vec = new Array(len).fill(0).map(() => new Array()); // 根据祖先节点进行分组，value是字符串里面的字符的结合
  for (let i = 0; i < len; i++) {
    fa[i] = uf.findSet(i);
    vec[fa[i]].push(s[i]);
  }

  for (let i = 0; i < len; i++) {
    if (vec[i].length > 0) {
      vec[i].sort((a, b) => a.charCodeAt() - b.charCodeAt());
    }
  }

  // 通过原始字符坐标，获取字符的组号，拼接字符串
  // 记录每一组字符串位置
  let p = new Array(len).fill(0);
  // 输出字符的数组
  let ans = [];
  for (let i = 0; i < len; i++) {
    ans.push('1');
  }

  // 通过原始字符坐标，获取字符的组号，拼接字符串
  for (let i = 0; i < len; i++) {
    ans[i] = vec[fa[i]][p[fa[i]]];
    p[fa[i]]++;
  }

  // 拼接字符jion
  return ans.join('');
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