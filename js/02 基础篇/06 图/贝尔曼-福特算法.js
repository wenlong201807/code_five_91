// 参考学习 https://leetcode-solution.cn/solutionDetail?type=2&id=2006&max_id=2008
/*
主要解决单源最短路径，即图中某一点到其他点的最短距离。

其基本思想也是动态规划。

核心算法为：

初始化起点距离为 0

对图中的所有边进行若干次处理，直到稳定。处理的依据是：对于每一个有向边 (u,v)，如果 dist[u] + w 小于 dist[v]，那么意味着我们找到了一条到达 v 更近的路，更新之。

上面的若干次的上限是顶点 V 的个数，因此不妨直接进行 n 次处理。

最后检查一下是否存在负边引起的环。（注意）

举个例子。对于如下的一个图，存在一个 B -> C -> D -> B，这样 B 到 C 和 D 的距离理论上可以无限小。我们需要检测到这一种情况，并退出。


此算法时间复杂度：O(V*E)O(V∗E)， 空间复杂度：O(V)O(V)。
*/

const BellmanFord = (edges, startPoint) => {
  const n = edges.length;
  const dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  dist[startPoint] = 0;

  for (let i = 0; i < n; i++) {
    for (const [u, v, w] of edges) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  for (const [u, v, w] of edges) {
    if (dist[u] + w < dist[v]) return -1;
  }

  return dist;
};
// 参考学习 https://blog.csdn.net/weixin_33712987/article/details/88925708