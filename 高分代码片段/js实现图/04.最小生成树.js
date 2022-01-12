/*

参考学习 https://zhuanlan.zhihu.com/p/130432011

最小生成树是一副连通加权无向图中一棵权值最小的生成树，一个连通图的生成树是图的极小连通子图，它包含图中的所有顶点，并且只含尽可能少的边。这意味着对于生成树来说，若砍去它的一条边，就会使生成树变成非连通图；若给它增加一条边，就会形成图中的一条回路。

在一个给定的带权连通无向图 N=(V, E) 中，对于不同的生成树，其所有边上的权值之和也可能不同。假设R为G的所有生成树的集合，若T是R中边的权值之和最小的那棵生成树，则T为G的最小生成树。

所以，最小生成树具有某些特定的性质：

最小生成树的边数总是比其顶点数少一个。
最小生成树可能不是唯一的，但是不同的最小生成树的权值之和总是相同的。
求最小生成树有两种非常经典的方法——普里姆算法和克鲁斯卡尔算法， 在本篇中会详细介绍如何使用JS实现这两种经典算法。


在求最小生成树之前，还有一些准备工作要做:

获取图中边的权值
判断给定的图是否是一幅连通图
获取图中的权值之和
获取图中所有的边
我会在用到这些方法的时候再予以实现。

首先是获取图中边上的权值，不管是普里姆算法还是克鲁斯卡尔算法都要用到这个方法，该方法获取边(x, y)或<x, y>对应的权值，如果顶点x和y构不成边的话，就返回0。


然后要需要知道所求最小生成树的那幅图是不是一幅连通图，如果算法获取到的不是连通图，那么对其求最小生成树就会显得没有意义。所以要写一个方法来判断给定的图是否是一幅连通图，就是isConnected方法了。

该方法使用到了上一篇中提及到的_BFS方法，或者_DFS方法来遍历一幅给定的图，若其在遍历玩一次之后仍有顶点未被访问到，那么就有充足的理由相信这张图不是一幅连通图。


普里姆算法
假设从顶点A开始这个过程，那么使用图片来描述普里姆算法的话，大概是这个样子的：图略

使用图片来展示这个过程显示是如此的清晰而明朗，一旦使用文字来描述这个过程就让人不那么高兴了，但是如果想要使用代码来描述这个过程的话，可比使用文字来描述这个过程更有挑战性了。

下面尝试使用文字来描述这个过程：

假设 N={V, E} 是连通网，V是图中所有所有顶点的集合，E是图中所有边的结合，ET是N上最小生成树边的集合，初始时ET={}，VT={V0}。算法在u∈VT，v∈V-VT中选择一条权值最小的边（u，v）加入ET集合中，同时将v加入VT中，重复这个过程，一直到VT等于V为止。

好吧，我不会告诉你为了写上面这段文字，花费了我好多的时间的。

换上一种更容易懂的说法：假设V是图中所有所有顶点的集合，VT初始时在V中任选一个顶点（算法实现里假设总是选择第一个顶点），找出VT与V-VT中所有能构成的边的组合，选择其中权重最小的组合，然后取出这个组合在V-VT的中顶点放入VT中，直到VT=V。


克鲁斯卡尔算法
使用图片来描述克鲁斯卡尔算法的话，大概是这个样子的：图略
相比于普里姆算法来说，克鲁斯卡尔算法比较好理解一些，它是一种按照权值递增次序选择合适的边来构造最小生成树的方法。

假设在一个给定的带权连通无向图 N=(V, E) 中，其对应的最小生成树是 T=(VT, ET)，克鲁斯卡尔算法的过程为：

初始时有VT=V，ET=Ø。可以把每个顶点都看作是一颗独立的树，T此时是一个仅含有顶点的森林，在E-ET中按照权值递增的顺序依次选择一条边，如果将这条边加入T后不构成回路，则将其加入ET中，否则舍弃，直到ET中边的个数比T中的顶点的个数少一个。

简而言之，算法的基本思想是先找权重最小的边，再找权重次小的边...，如果找到的边加入最小生成树中不构成回路就保留，否则舍弃。

为了在所有的边中按照权值递增的次序选择边，在实现克鲁斯卡尔算法前首先要实现一个方法用来获取图中的所有的边。管这个方法叫getAllEdges，



实现克鲁斯卡尔算法。

在算法中，新建一颗空树，并用给定的连通图中的顶点来初始化这颗树。一开始的时候，由于这个空树中只有顶点，所以在这棵空树中的连通分量就是顶点的数目，每次找到一条符合条件的权值最小的边加入这颗空树中后，该空树的连通分量就会减一，如果循环一直继续的话，随着边的不断加入，如果不加以控制的话，该最小生成树最后就会形成回路，需要在其形成回路前终止循环，也就是随着边的不断加入，该最小生成树中的连通分量在等于1之前结束循环。

在之前的算法描述中曾提到：如果找到的边加入最小生成树中不构成回路就保留，否则舍弃。那么如何在算法中实现这个过程呢？

在找到权值最小的边之后，假设这条边叫做(u, v)，从顶点u开始对该尚未形成的最小生成树进行一次广度或者深度优先遍历，因为之前的遍历算法中，如果一张图中具有多个连通分量，那么对这张图进行遍历后的结果就会以 '&' 将每个连通分量隔开，因为是从顶点u开始遍历的，那么在遍历后的结果中，顶点u所在的连通分量一定在第一个 '&' 分隔符之前，所以算法中在遍历的结果中只取第一个 '&' 前面的字符串，如果发现顶点v不在该字符串当中，那就说明u和v属于树中不同的连通分量，可以放心大胆的将边(u，v)加入要生成的最小生成树当中而不必担心产生回路。而如果顶点u和顶点v属于同一个连通分量的话，就说明顶点u和顶点v之间已经具有路径了，此时如果再直接连接顶点u和顶点v则必然会产生回路，所以就应该舍弃这条边了。

算法的关键点基本讲完了，
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
}

// 使用Prim算法求得最小生成树，并用这个方法来测试下上图：

let arr = ['A', 'B', 'C', 'D', 'E'];
let myGraph = new Graph(0); // 0表示无向图
myGraph.initVertex(arr);

myGraph.addEdge('A', 'B', 5);
myGraph.addEdge('A', 'C', 7);
myGraph.addEdge('A', 'E', 6);
myGraph.addEdge('B', 'D', 2);
myGraph.addEdge('B', 'E', 4);
myGraph.addEdge('C', 'D', 4);
myGraph.addEdge('C', 'E', 2);
myGraph.addEdge('D', 'E', 3);

let MSTree = myGraph.getPrimMSTree();

console.log(MSTree.BFSTraverse()); // 广度优先遍历下看看
// 输出A->B->D->E->C
console.log(MSTree.DFSTraverse()); // 深度优先遍历下看看
// 输出A->B->D->E->C
console.log(MSTree.getSumOfWeight());
// 输出12
// 虽然没有挨个的检查每个边上的权值，但是相比于再写一个测试代码来说，我觉得已经可以相信该算法生成的最小生成树确实是对的了。

// 使用之前测试普里姆算法构造好的那幅图来测试下当前的克鲁斯卡尔算法：

let MSTree = myGraph.getKruskalMST();
console.log(MSTree.BFSTraverse()); // 广度优先遍历下看看
// 输出A->B->D->E->C
console.log(MSTree.DFSTraverse()); // 深度优先遍历下看看
// 输出A->B->D->E->C
console.log(MSTree.getSumOfWeight());
// 输出12
// 结果是相同的。
