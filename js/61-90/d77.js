/**
 * 并查集类
 */
class UnionFind {
  constructor(size) {
    // 初始化数组，其值为其索引值
    this.parents = Array(size)
      .fill(0)
      .map((_, i) => i);
    this.sizes = Array(size).fill(1);
  }

  /**
   * 返回某个节点x的根节点
   */
  find(x) {
    if (x !== this.parents[x]) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }

  /**
   * 获取所在集合的大小
   */
  getSize(x) {
    return this.sizes[this.find(x)];
  }

  /**
   * 连接
   */
  union(a, b) {
    const fa = this.find(a);
    const fb = this.find(b);
    if (fa == fb) {
      return;
    }

    if (this.sizes[fa] < this.sizes[fb]) {
      this.parents[fa] = fb;
      // fb是root
      this.sizes[fb] += this.sizes[fa];
    } else {
      this.parents[fb] = fa;
      // fa是root
      this.sizes[fa] += this.sizes[fb];
    }
  }
}

/* ============================================================= */
/**
 *
 * @param {*} graph
 * @param {*} initial
 */
var minMalwareSpread = function (graph, initial) {
  const uf = new UnionFind(graph.length);
  // 根据graph构建uf
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      graph[i][j] === 1 && uf.union(i, j);
    }
  }

  let minNumbers = Infinity,
    minIndex = initial[0];
  for (let i = 0; i < initial.length; i++) {
    // 把第i个节点去掉，然后计算感染节点数
    let temNumbers = getInfectedNumbers([
      ...initial.slice(0, i),
      ...initial.slice(i + 1),
    ]);

    // 如果感染人数更少，更新结果minIndex
    if (minNumbers > temNumbers) {
      minIndex = initial[i];
      minNumbers = temNumbers;
      // 如果感染人数一样，则取索引值更小的
    } else if (minNumbers === temNumbers && minIndex > initial[i]) {
      minIndex = initial[i];
    }
  }
  return minIndex;

  /**
   * 根据inital 和 uf 计算感染节点数
   */
  function getInfectedNumbers(initial) {
    // 去重
    const roots = [];
    for (let i = 0; i < initial.length; i++) {
      const p = uf.find(initial[i]);
      roots.includes(p) || roots.push(p);
    }

    return roots.reduce((prev, curr) => prev + uf.getSize(curr), 0);
  }
};

// 作者：xing-guang-29
// 链接：https://leetcode-cn.com/problems/minimize-malware-spread/solution/924-jin-liang-jian-shao-e-yi-ruan-jian-d-9fha/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
