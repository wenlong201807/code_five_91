/*

参考学习 https://zhuanlan.zhihu.com/p/132678135

最短路径
在带权图中，把从一个顶点到图中任一个顶点的一条路径（可能有多条路径）上所经过边上的权值之和定义为该路径的带权路径长度，其中权值之和最小的那条路径叫做最短路径。

求最短路径还可以分为求单源最短路径和各个顶点之间的最短路径问题。本篇中只会介绍使用Dijkstra算法求单源最短路径。

Dijkstra算法
求带权有向图中某个源点到其余各顶点的最短路径，最常用的是Dijkstra算法。该算法设置一个集合S（可用数组实现）用来记录已求得的最短路径的顶点。该集合初始时将源点放入其中，此后每求出源点到某个顶点的最短路径，就将该顶点放入集合中来。

除此之外，实现该算法时用到了两个辅助数组：

dist：记录了从源点到其他各顶点当前的最短路径长度。
path：表示从源点到顶点 i 之间的最短路径。
假设从顶点0出发，集合S最初只包含顶点0，邻接矩阵arcs表示带权有向图， arcs[i][j]表示有向边<i, j>的权值，如果不存在有向边<i, j>，则arcs[i][j]记为无穷大，那么算法的步骤如下：

集合S初始时为{V0}，dist的初始值dist[i] = arcs[0][i]，i 表示顶点Vi。0表示顶点V0。
从顶点集合V-S中选出一个顶点，假设为Vj，其满足dist[j] = Min {dist[i] | Vi∈V-S}，Vj就是当前求得的V0到Vj的最短路径的终点，并令S = S ∪ { Vj }。
修改从V0出发到集合V-S上任意一个顶点Vk可到达的最短路径，V0初始时可能并不能直接到达顶点Vk，这时可以通过顶点 Vj 作为中转看看是否能够到达，或者通过Vj作为中转后到达的路径权值之后小于之前已有的数值，那么就可以做出一些修改了：如果dist[j] + arcs[j][k] < dist[k]，则令dist[k] = dist[j] + arcs[j][k]。
重复步骤2和3，直到所有的顶点都包含在集合S中。
 * /

/**
 * 求带权图顶点x到其他顶点的最短路径
 * 从x到y可能有多条路径，把带权路径长度最短的那条路径称为最短路径
 * 求解最短路径的算法通常都依懒于一种性质，
 * 也就是两点之间的最短路径也包含了路径上的其他顶点间的最短路径
 * @param {*} x 
 */
function getShortestPath(x) {
  // 使用Dijkstra算法，
  // 如果是无向图或者边有负的权值时退出
  // 如果x不存在于图中时退出
  // 如果从顶点x到不了图中任意一个顶点则退出
  if (
    !this.isDirect ||
    this.getMinEdgeWeight() < 0 ||
    this._find(x) === -1 ||
    !this.isConnected(x)
  ) {
    return -1;
  }

  var MAX = Number.MAX_SAFE_INTEGER;

  // 初始化
  var len = this.adj.length;

  // 在dist数组中，dist[i]的初值为顶点x到顶点i之间的权值，
  // x到i没有路径时，dist[i]记为无穷大
  var dist = [];
  var path = []; // path[i]表示顶点x到i的最短路径
  var vers = []; // 顶点集
  var exts = [x]; // 已找到最短路径的点的集合

  // 初始化path和dist数组
  for (let i = 0; i < len; i++) {
    vers[i] = this.adj[i].data;
    dist[i] = this.getEdgeWeight(x, vers[i]) || MAX;
    if (dist[i] !== MAX) {
      path[i] = `${x}->${vers[i]}`;
    } else {
      path[i] = '';
    }
  }

  var rem = vers.filter((x) => exts.indexOf(x) === -1); // 剩余的顶点
  var n = 1;

  while (n < len) {
    // 在dist中寻找最小值
    var min = MAX;
    var idx = -1;

    for (let i = 0; i < len; i++) {
      if (min > dist[i]) {
        min = dist[i];
        idx = i;
      }
    }

    var Vj = vers[idx]; // 直接找到Vj
    dist[idx] = MAX;
    exts.push(Vj);
    rem = vers.filter((x) => exts.indexOf(x) === -1);
    console.log(path[idx]); // 输出最短路径

    // 松弛工作
    for (let i = 0; i < rem.length; i++) {
      // Vj到其他节点的距离
      var w = this.getEdgeWeight(Vj, rem[i]) || MAX;
      var k = vers.indexOf(rem[i]);

      if (w + min < dist[k]) {
        dist[k] = w + min;
        path[k] = `${path[idx]}->${rem[i]}`;
      }
    }

    n++;
  }
}

// 先将这个张图构建出来：
var arr = ['A', 'B', 'C', 'D', 'E'];
var myGraph = new Graph(1); // 1表示有向图
myGraph.initVertex(arr);

myGraph.addEdge('A', 'B', 10);
myGraph.addEdge('A', 'C', 3);
myGraph.addEdge('B', 'C', 1);
myGraph.addEdge('B', 'D', 2);
myGraph.addEdge('C', 'B', 4);
myGraph.addEdge('C', 'D', 8);
myGraph.addEdge('C', 'E', 2);
myGraph.addEdge('D', 'E', 7);
myGraph.addEdge('E', 'D', 9);

// 看一眼邻接表：
for (let i = 0; i < arr.length; i++) {
  myGraph.allNeightbors(arr[i]);
}

// 输出：
// A=>B=>C
// B=>C=>D
// C=>B=>D=>E
// D=>E
// E=>D

// 下面用上面写的代码求顶点A到其他顶点的最短路径：
myGraph.getShortestPath('A');
// 输出：
// A->C
// A->C->E
// A->C->B
// A->C->B->D
// 输出是正确的，从输出中也可以看到最短路径中有一个很重要的性质：那就是两点之间的最短路径也包含了路径上其他顶点间的最短路径。
