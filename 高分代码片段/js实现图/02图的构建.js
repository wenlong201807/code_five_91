/*

参考学习 https://zhuanlan.zhihu.com/p/112764372

可以用图对现实中的很多系统建模。比如对交通流量建模，顶点可以表示街道的十字路口，边可以表示街道。加权的边可以表示限速或者车道的数量。建模人员可以用这个系统来判最佳路线及最有可能堵车的街道。

任何运输系统都可以用图来建模。比如，航空公司可以用图来为其飞行系统建模。将每个机场看成顶点，将经过两个顶点的每条航线看作一条边。加权的边可以表示从一个机场到另一个机场的航班成本，或两个机场间的距离，这取决于建模的对象是什么。

包含局域网和广域网（如互联网）在内的计算机网络，同样经常用图来建模。另一个可以用图来建模的现实系统是消费市场，顶点可以用来表示供应商和消费者。



本篇的内容主要是如何构建一张图，以及关于图的基本操作

isDirect为0表示这是一张无向图，为1则表示这是一张有向图。
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
}

// 首先来构建这张图：

let arr = ['A', 'B', 'C', 'D', 'E'];
let myGraph = new Graph(0);
myGraph.initVertex(arr);
myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('A', 'E');
myGraph.addEdge('B', 'E');
myGraph.addEdge('C', 'E');
myGraph.addEdge('D', 'B');
myGraph.addEdge('D', 'C');
myGraph.addEdge('D', 'E');
// 然后来显示下

for(let i=0; i<arr.length; i++) {
    myGraph.allNeightbors(arr[i]);
}
// 其输出为：

// A=>B=>C=>E
// B=>A=>E=>D
// C=>A=>E=>D
// D=>B=>C=>E
// E=>A=>B=>C=>D
// 可以看到，结果与图2是一致的。

// 将C和E之间断开看看：

myGraph.removeEdge('C', 'E');
for(let i=0; i<arr.length; i++) {
    myGraph.allNeightbors(arr[i]);
}
// 输出为：

// A=>B=>C=>E
// B=>A=>E=>D
// C=>A=>D
// D=>B=>C=>E
// E=>A=>B=>D
// 可以看到C的边表中没有E了，E的边表中也没有C了。