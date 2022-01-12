/*

参考学习 https://zhuanlan.zhihu.com/p/132678135
另外可参考学习的  https://longgererer.github.io/2019/06/21/%E7%94%A8JS%E5%AE%9E%E7%8E%B0%E6%9C%80%E7%9F%AD%E8%B7%AF%E5%BE%84%E7%AE%97%E6%B3%95/

最短路径
在带权图中，把从一个顶点到图中任一个顶点的一条路径（可能有多条路径）上所经过边上的权值之和定义为该路径的带权路径长度，其中权值之和最小的那条路径叫做最短路径。

求最短路径还可以分为求单源最短路径和各个顶点之间的最短路径问题。本篇中只会介绍使用Dijkstra算法求单源最短路径。

Dijkstra算法
求带权有向图中某个源点到其余各顶点的最短路径，最常用的是Dijkstra算法。该算法设置一个集合S（可用数组实现）用来记录已求得的最短路径的顶点。该集合初始时将源点放入其中，此后每求出源点到某个顶点的最短路径，就将该顶点放入集合中来。

除此之外，实现该算法时用到了两个辅助数组：

dist：记录了从源点到其他各顶点当前的最短路径长度。
path：表示从源点到顶点 i 之间的最短路径。
假设从顶点0出发，集合S最初只包含顶点0，邻接矩阵arcs表示带权有向图， arcs[i][j]表示有向边<i, j>的权值，如果不存在有向边<i, j>，则arcs[i][j]记为无穷大，那么算法的步骤如下：

1 集合S初始时为{V0}，dist的初始值dist[i] = arcs[0][i]，i 表示顶点Vi。0表示顶点V0。
2 从顶点集合V-S中选出一个顶点，假设为Vj，其满足dist[j] = Min {dist[i] | Vi∈V-S}，Vj就是当前求得的V0到Vj的最短路径的终点，并令S = S ∪ { Vj }。
3 修改从V0出发到集合V-S上任意一个顶点Vk可到达的最短路径，V0初始时可能并不能直接到达顶点Vk，这时可以通过顶点 Vj 作为中转看看是否能够到达，或者通过Vj作为中转后到达的路径权值之后小于之前已有的数值，那么就可以做出一些修改了：如果dist[j] + arcs[j][k] < dist[k]，则令dist[k] = dist[j] + arcs[j][k]。
4 重复步骤2和3，直到所有的顶点都包含在集合S中。
*/

class Graph {
  constructor(isDirect) {
    this.eNum = 0; // 边的数目
    this.adj = []; // 顶点表
    this.isDirect = isDirect; // 是否是有向图
  }
  // 初始化顶点表
  initVertex(verArr) {
    for (let i = 0; i < verArr.length; i++) {
      let newVer = new Vertex(verArr[i]);
      this.adj[i] = newVer;
    }
  }

  // 插入新的顶点
  insertVertex(x) {
    let newVer = new Vertex(x);
    this.adj.push(newVer);
  }

  // 找到节点x在adj中所在的位置
  // 前面加上下划线表示不应该在具体实例中调用该方法
  _find(x) {
    let pos = -1;
    for (let i = 0; i < this.adj.length; i++) {
      if (x == this.adj[i].data) pos = i;
    }
    return pos;
  }

  // 在为顶点之间插入边之前，还需要知道顶点之间是否已经有了边，下面的代码判断x和y之间是否具有边，从顶点x的边表第一元素开始遍历，如果发现存在y节点则说明顶点x和顶点y之间已经有了一条边了。
  // 判断图中是否存在边(x,y)或者<x, y>。
  hasEdge(x, y) {
    let pos = this._find(x);
    if (pos > -1) {
      let curVer = this.adj[pos].firstEdge;

      if (!curVer) {
        // 没有与顶点x的邻接点
        return false;
      } else {
        // 至少有一个节点与顶点x是相邻的
        // 遍历顶点的所有邻接节点
        while (curVer) {
          if (curVer.data === y) return true;
          curVer = curVer.nextEdge;
        }
        return false;
      }
    }
  }

  //  好了，所有的准备工作都做完了，接着就可以连接任意顶点了。此时分为有向图还是无向图，如果是无向图的话，在插入边(x, y)后还要再插入边(y, x)，这是因为用邻接表来存储无向图时，顶点x的边表中具有顶点y，那么顶点y的边表中必然也有顶点x。而如果是有向图中的话，只需要插入边<x, y>就可以了。
  // 在插入边的时候，首先判断下顶点x和顶点y之间是否已经存在了一条边了，只有x和y之间没有边时，才可以在顶点x和顶点y之间插入一条边。接着所做的工作就是将顶点y添加在x的边表中。
  // 需要注意的是，在插入边的过程中，如果是有向图时，也同时更新了每个顶点的入度和出度，而如果是无向图的话，则分别更新了与x和y相邻的节点的数量。
  // 之所以需要顶点的入度和出度，是为了后面求图的拓扑排序和关键路径准备的。

  // 向图中插入边(x, y)或者边<x, y>
  // addEdge(x, y, w = 0) {}
  /**
   * @param {Number, String} x
   * @param {Number, String} y
   * @param {Number} w
   */
  addEdge(x, y, w = 0) {
    // 向图中插入边(x, y)
    let posX = this._find(x);
    let posY = this._find(y);
    let newEdgeX = new Edge(x, w);
    let newEdgeY = new Edge(y, w);

    // 如果是无向图，在插入边(x, y)时还要插入边(y, x)
    if (!this.isDirect) {
      if (!this.hasEdge(x, y) && !this.hasEdge(y, x)) {
        if (posX > -1) {
          // 如果顶点x在顶点表中
          let curVer = this.adj[posX].firstEdge;

          if (!curVer) {
            // 如果当前顶点没有第一个边节点
            this.adj[posX].firstEdge = newEdgeY;
            this.adj[posX].outNum++;
          } else {
            let len = this.adj[posX].outNum - 1;

            while (len--) {
              curVer = curVer.nextEdge;
            }

            curVer.nextEdge = newEdgeY;
            this.adj[posX].outNum++;
          }
        }
        if (posY > -1) {
          // 如果顶点y在顶点表中
          let curVer = this.adj[posY].firstEdge;

          if (!curVer) {
            // 如果当前顶点没有第一个边节点
            this.adj[posY].firstEdge = newEdgeX;
            this.adj[posY].outNum++;
          } else {
            let len = this.adj[posY].outNum - 1;

            while (len--) {
              curVer = curVer.nextEdge;
            }

            curVer.nextEdge = newEdgeX;
            this.adj[posY].outNum++;
          }
        }

        this.eNum++;
      }
    }
    // 如果是有向图则只需要插入边<x, y>即可
    else {
      if (!this.hasEdge(x, y)) {
        if (posX > -1) {
          // 如果顶点x在顶点表中
          let curVer = this.adj[posX].firstEdge;

          if (!curVer) {
            // 如果当前顶点没有第一个边节点
            this.adj[posX].firstEdge = newEdgeY;
            this.adj[posX].outNum++;
          } else {
            let len = this.adj[posX].outNum - 1;

            while (len--) {
              curVer = curVer.nextEdge;
            }

            curVer.nextEdge = newEdgeY;
            this.adj[posX].outNum++; // 顶点x的出度增长
          }

          this.eNum++;
        }

        if (posY > -1) {
          let curVer = this.adj[posY];
          curVer.inNum++; // 顶点y的入度增长
        }
      }
    }
  }
  // 有了增加边的操作，自然也应该有删除边的操作。和增加边相同，在无向图中删除边(x, y)时，同时也需要删除(y, x)，有向图则只需要删除边<x, y>就可以了。
  // 需要注意的是，在删除边时，涉及到更新顶点的边表，而顶点类中的firstEdge指针，指向与该顶点边表中的第一个节点，如果需要删除这个节点，还需要更新firstEdge指向。这里的操作和单链表中删除有点类似。
  // 在图中删除边(x, y)或者边<x, y>
  // removeEdge(x, y) {}

  // 额外多出来的？？？
  /**
   * 由于是由邻接表表示的数据结构，当删除边(x, y)时也需要同时删除边(y, x);
   * @param {String, Number} x
   * @param {String, Number} y
   */
  removeEdge(x, y) {
    // 在图中删除边(x, y)
    if (this.hasEdge(x, y)) {
      let posX = this._find(x);
      let posY = this._find(y);
      let curVerX = this.adj[posX].firstEdge;
      let curVerY = this.adj[posY].firstEdge;

      // 如果是无向图，当删除边(x, y)时也需要同时删除边(y, x);
      if (!this.isDirect) {
        // 删除边(x, y)
        if (curVerX.data === y) {
          // 如果顶点的第一个节点即是要找的节点
          this.adj[posX].firstEdge = curVerX.nextEdge;
          this.adj[posX].outNum--;
          curVerX = null;
        }
        // curVerX如果存在，说明要找的节点不是顶点的第一个节点
        while (curVerX) {
          let preVerX = curVerX;
          curVerX = curVerX.nextEdge;

          if (curVerX && curVerX.data === y) {
            preVerX.nextEdge = curVerX.nextEdge;
            this.adj[posX].outNum--;
            curVerX = null;
          }
        }

        // 删除边(y, x)
        if (curVerY.data === x) {
          // 如果顶点的第一个节点即是要找的节点
          this.adj[posY].firstEdge = curVerY.nextEdge;
          this.adj[posY].outNum--;
          curVerY = null;
        }

        // curVerY如果存在，说明要找的节点不是顶点的第一个节点
        while (curVerY) {
          let preVerY = curVerY;
          curVerY = curVerY.nextEdge;

          if (curVerY && curVerY.data === x) {
            preVerY.nextEdge = curVerY.nextEdge;
            this.adj[posY].outNum--;
            curVerY = null;
          }
        }
      } else {
        // 删除边<x, y>
        if (curVerX.data === y) {
          // 如果顶点的第一个节点即是要找的节点
          this.adj[posX].firstEdge = curVerX.nextEdge;
          this.adj[posX].outNum--;
          curVerX = null;
        }

        // curVerX如果存在，说明要找的节点不是顶点的第一个节点
        while (curVerX) {
          let preVerX = curVerX;
          curVerX = curVerX.nextEdge;

          if (curVerx && curVerX.data === y) {
            preVerX.nextEdge = curVerX.nextEdge;
            this.adj[posX].outNum--;
            curVerX = null;
          }
        }

        this.adj[posY].inNum--;
      }

      this.eNum--;
    }
  }

  // 与删除边操作不同的是，在删除图中的一个顶点时，与此顶点所有相邻的边都要删除。此时需要分为两步操作，第一步删除所有以x为起点的边，第二步删除所有以x为终点的边。
  // 从图中删除顶点x
  deleteVertex(x) {
    let pos = this._find(x);

    if (pos > -1) {
      // 删除从x出发的边
      let curVer = this.adj[pos].firstEdge;

      while (curVer) {
        this.removeEdge(x, curVer.data);
        curVer = curVer.nextEdge;
      }

      // 删除终点是x的边
      for (let i = 0; i < this.adj.length; i++) {
        let temVer = this.adj[i].firstEdge;

        while (temVer) {
          if (temVer.data === x) {
            this.removeEdge(this.adj[i].data, temVer.data);
          }

          temVer = temVer.nextEdge;
        }
      }

      // 删除顶点x
      this.adj.splice(pos, 1);
    }
  }

  //求出下这个图的邻接表，不断的遍历每个顶点的边表就可以了。
  // 与顶点x邻接的所有节点
  allNeightbors(x) {
    let pos = this._find(x);

    if (pos > -1) {
      let result = `${x}`;
      let curVer = this.adj[pos].firstEdge;

      while (curVer) {
        result += `=>${curVer.data}`;
        curVer = curVer.nextEdge;
      }

      console.log(result);
    }
  }

  //   广度优先遍历
  // 思路：
  // 首先访问起始顶点v，接着由v出发，依次访问v的各个未访问过的邻接顶点w1，w2，……，然后再依次访问w1，w2，……，wi的所有未被访问过的邻接顶点。
  // 再从这些访问过的顶点出发，再访问他们所有未被访问过的邻接顶点，依次类推，直到所有的顶点都被访问过。
  // 如果无向图是连通的，则从给定的顶点出发，仅需一次遍历就能够访问图中所有的顶点，如果无向图是非连通的，则给定的顶点出发，一次遍历只能访问到该顶点所在的连通分量的所有顶点，而对于图中其他连通分量的顶点，则无法通过这次遍历访问。
  // 对于有向图来说，如果从初始点到图中的每个顶点都有路径，则能够访问到图中所有的顶点，否则不能访问到所有的顶点。
  // 使用一个visited数组来标记顶点是否被访问过。
  // 广度优先求出图中所有的连通分量，从给定的顶点x开始
  BFSTraverse(x = this.adj[0].data) {
    // x为广度优先遍历的起始顶点
    let visited = []; // 访问标记数组，标记数组和顶点表唯一的联系就是下标
    let result = '';

    for (let i = 0; i < this.adj.length; i++) {
      visited[i] = false;
    }

    result = this._BFS(x, visited); // 求以x为起始点的连通分量

    // 如果还有未被访问过的顶点，则以该顶点再次出发
    for (let i = 0; i < visited.length; i++) {
      if (!visited[i]) {
        let x = this.adj[i].data;
        result += `&${this._BFS(x, visited)}`; // 其他的连通分量
      }
    }

    return result;
  }

  // 实际进行广度遍历的函数，每次遍历都是得到一个以顶点x为起点的连通分量
  _BFS(x, visited) {
    let result = '';
    let queue = []; // 辅助队列
    let pos = this._find(x); // 找到顶点x在顶点表中的位置

    if (pos > -1) {
      result += `${x}`;
      visited[pos] = true; // 在标记数组相应的位置上做已访问标识

      let curVer = this.adj[pos]; // 当前顶点
      queue.push(curVer); // 顶点x入队列

      while (queue.length) {
        curVer = queue.shift(); // 取出一个顶点
        // 注意要回到顶点的表中再次出发
        pos = this._find(curVer.data);
        curVer = this.adj[pos].firstEdge;

        while (curVer) {
          // 检测顶点的所有邻接点
          pos = this._find(curVer.data);

          if (!visited[pos]) {
            // 如果当前节点未被访问过
            result += `->${curVer.data}`;
            visited[pos] = true; // 做已访问标识
            queue.push(curVer);
          }

          curVer = curVer.nextEdge;
        }
      }
    }

    return result;
  }

  // 深度优先遍历
  // 思路：
  // 首先访问图中某一个起始顶点x，然后由x出发，访问与x邻接且未被访问的任一个顶点w1，再访问与w1邻接的未被访问的任一个顶点w2，重复这个过程，当不能再继续向下访问时，依次退回到最近被访问的顶点，若它还有邻接顶点未被访问过，则从该点开始继续上述搜索过程，直到图中所有的顶点都被访问过为止。
  // 与广度优先遍历一样，从某个给定顶点开始，如果无向图是连通的，则这个给定的顶点出发，仅需一次遍历就能够访问图中所有的顶点，如果无向图是非连通的，则从这个顶点出发，一次遍历只能访问到该顶点所在的连通分量的所有顶点，而对于图中其他连通分量的顶点，则无法通过这次遍历访问。
  // 对于有向图来说，如果从初始点到图中的每个顶点都有路径，则能够访问到图中所有的顶点，否则不能访问到所有的顶点。

  // 深度优先求出图中所有的连通分量，从给定的顶点x开始
  DFSTraverse(x = this.adj[0].data) {
    let result = '';
    let visited = []; // 标记数组

    for (let i = 0; i < this.adj.length; i++) {
      visited[i] = false;
    }

    result = this._DFS(x, visited);

    // 如果还有未被访问过的顶点，则以该顶点再次出发
    for (let i = 0; i < visited.length; i++) {
      if (!visited[i]) {
        let x = this.adj[i].data;
        result += `&${this._DFS(x, visited)}`;
      }
    }

    return result;
  }

  // 实际进行深度遍历的函数，每次遍历都是得到一个以顶点x为起点的连通分量
  _DFS(x, visited) {
    let result = '';
    let stack = []; // 辅助堆栈
    let pos = this._find(x);
    let curVer = this.adj[pos]; // 根据给的x值找到具体的顶点

    if (pos > -1) {
      stack.push(curVer); // 顶点x入栈
      result += `${x}`;
      visited[pos] = true;

      while (stack.length) {
        curVer = stack[stack.length - 1]; // 获取栈顶元素
        pos = this._find(curVer.data); // 获取栈顶元素在顶点表中的位置
        curVer = this.adj[pos].firstEdge; // 获取顶点的第一个邻接点

        while (curVer) {
          pos = this._find(curVer.data);

          if (visited[pos]) {
            // 如果该节点已经访问过了,则访问该节点的下一个相邻的节点
            curVer = curVer.nextEdge;
          } else {
            stack.push(curVer);
            result += `->${curVer.data}`;
            visited[pos] = true;
            break;
          }
        }

        if (!curVer) stack.pop(); // 如果顶点的所有邻接点都访问过
      }
    }

    return result;
  }

  // 获取边(x, y)或<x, y>对应的权值
  /**
   * 获取边(x, y)或<x, y>对应的权值
   * @param {*} x
   * @param {*} y
   */
  getEdgeWeight(x, y) {
    let pos = this._find(x);

    if (pos > -1) {
      let curVer = this.adj[pos].firstEdge;

      while (curVer) {
        if (curVer.data === y) {
          return curVer.weight;
        }

        curVer = curVer.nextEdge;
      }

      return 0;
    }
  }

  // 为了便于测试，实现一个获取权重之和的函数，来判断最小生成树是否正确生成：
  // 获得图中权重之和
  getSumOfWeight() {
    // 当图不是连通的时候，获取权重之和没有意义
    if (!this.isConnected()) return;

    let sum = 0;
    let vertex = this.adj;

    if (!this.isDirect) {
      // 如果是无向图
      for (let i = 0; i < vertex.length - 1; i++) {
        for (let j = i; j < vertex.length; j++) {
          let weight = this.getEdgeWeight(vertex[i].data, vertex[j].data);

          if (weight) sum += weight;
        }
      }
    } else {
      for (let i = 0; i < vertex.length; i++) {
        for (let j = 0; j < vertex.length; j++) {
          let weight = this.getEdgeWeight(vertex[i].data, vertex[j].data);

          if (weight) sum += weight;
        }
      }
    }

    return sum;
  }

  // 判断当前的图是否是连通图
  isConnected(x = this.adj[0].data) {
    // 任选一个顶点作为起点
    let len = this.adj.length;
    let visited = new Array(len);

    for (let i = 0; i < len; i++) {
      visited[i] = false;
    }

    this._BFS(x, visited);

    // 如果遍历一边之后仍有顶点未被访问，则该图不是连通的
    for (let i = 0; i < len; i++) {
      if (!visited[i]) return false;
    }

    return true;
  }

  // 在算法的实现过程中，新建了一颗空树，并且用传入算法的图的顶点初始化了这幅新建的图。对于在上述使用文字描述这个过程中提到的这句话

  // 算法在u∈VT，v∈V-VT中选择一条权值最小的边（u，v）加入ET集合中，同时将v加入VT中
  // 其在算法中的实现过程是在新建的空树中添加一条连接顶点u和v的一条边（u，v），并赋予相同的权值。重复这个过程，随着VT和V相等之后，这个新建的图就变成最小生成树了。

  // 普里姆算法
  getPrimMST() {
    // 不是连通图时求最小生成树没有意义
    if (!this.isConnected()) {
      return;
    }

    let V = this.adj; // 顶点集V
    let Vt = [V[0]]; // 添加任意一个顶点
    let VVt = V.filter((x) => Vt.indexOf(x) === -1); // VVt = V - Vt
    let MSTree = new Graph(this.isDirect); // 初始化空树
    V.forEach((x) => MSTree.insertVertex(x.data)); // 图方便先将所有顶点都放入树中

    while (Vt.length !== V.length) {
      // 若树中不含全部顶点
      let mVt = null; // 当找到权值最小的边时，mVT是边的一个顶点
      let mVVt = null; // 当找到权值最小的边时，mV_VT是边的另一个顶点
      let minW = Number.MAX_SAFE_INTEGER; // 先将minW赋个极大的数值

      // 在VT和V_VT中找到边中的最小权值
      for (let i = 0; i < Vt.length; i++) {
        // 从VT中取出一个顶点
        for (let j = 0; j < VVt.length; j++) {
          // 从VVt中取出一个顶点
          let weight = this.getEdgeWeight(Vt[i].data, VVt[j].data);

          if (weight && minW > weight) {
            minW = weight;
            mVt = Vt[i];
            mVVt = VVt[j];
          }
        }
      }

      Vt.push(mVVt);
      MSTree.addEdge(mVt.data, mVVt.data, minW);
      VVt = V.filter((x) => Vt.indexOf(x) === -1);
    }

    return MSTree;
  }

  // 获取图中所有的边
  // 获取图中所有的边
  getAllEdges() {
    let vertex = this.adj;
    let edges = []; // 在edges中存放图中所有的边

    if (!this.isDirect) {
      // 如果是无向图
      for (let i = 0; i < vertex.length - 1; i++) {
        for (let j = i; j < vertex.length; j++) {
          if (this.hasEdge(vertex[i].data, vertex[j].data)) {
            let weight = this.getEdgeWeight(vertex[i].data, vertex[j].data);
            edges.push([vertex[i].data, vertex[j].data, weight]);
          }
        }
      }
    } else {
      for (let i = 0; i < vertex.length; i++) {
        for (let j = 0; j < vertex.length; j++) {
          if (this.hasEdge(vertex[i].data, vertex[j].data)) {
            let weight = this.getEdgeWeight(vertex[i].data, vertex[j].data);
            edges.push([vertex[i].data, vertex[j].data, weight]);
          }
        }
      }
    }
    // 这个方法返回一个二维数组，在edges数组中，每一个元素都是一个数组，该数组一共三个元素，分别是顶点x的值，顶点y的值，和顶点x和y构成的边上的权值。
    return edges;
  }

  // 克鲁斯卡尔算法
  // 算法的基本思想是先找权重最小的边，再找权重次小的边
  getKruskalMST() {
    // 不是连通图时求最小生成树没有意义
    if (!this.isConnected()) {
      return;
    }

    let V = this.adj; // 顶点集V
    let numS = V.length; // 树中的连通分量
    let E = this.getAllEdges(); // 在E中存放图中所有的边
    let mEdge = null;

    let MSTree = new Graph(this.isDirect); // 初始化空树
    V.forEach((x) => MSTree.insertVertex(x.data)); // 树中只有顶点

    while (numS > 1) {
      let mWeight = Number.MAX_SAFE_INTEGER;

      // 从图中取出权值最小的边(u, v);
      for (let i = 0; i < E.length; i++) {
        if (E[i][2] < mWeight) {
          mEdge = E[i];
          mWeight = mEdge[2];
        }
      }

      let result = MSTree.BFSTraverse(mEdge[0]); // 广度优先遍历
      result = result.split('&')[0]; // 只取&前面的字符串
      let pos = result.indexOf(mEdge[1]);

      // 如果u和v属于树中不同的连通分量，就将此边加入生成树中
      // 从顶点mEdge[0]遍历一遍发现没有mEdge[1]，说明两个顶点不在一个连通分量之中
      if (pos === -1) {
        MSTree.addEdge(mEdge[0], mEdge[1], mEdge[2]);
        numS--;
      }

      E = E.filter((x) => x !== mEdge); // 去掉E中权值最小的边
    }

    return MSTree;
  }

  /**
   * 求带权图顶点x到其他顶点的最短路径
   * 从x到y可能有多条路径，把带权路径长度最短的那条路径称为最短路径
   * 求解最短路径的算法通常都依懒于一种性质，
   * 也就是两点之间的最短路径也包含了路径上的其他顶点间的最短路径
   * @param {*} x
   */
  getShortestPath(x) {
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
// 没问题。

// 下面用上面写的代码求顶点A到其他顶点的最短路径：

myGraph.getShortestPath('A');
// 输出：
// A->C
// A->C->E
// A->C->B
// A->C->B->D
// 输出是正确的，从输出中也可以看到最短路径中有一个很重要的性质：那就是两点之间的最短路径也包含了路径上其他顶点间的最短路径。
