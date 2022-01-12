/*

参考学习 https://zhuanlan.zhihu.com/p/116855699

本篇来实现图的广度和深度遍历操作。

以前在刚学数据结构的时候，看着老师在讲台上讲图的遍历操作时，思路还能跟上。但是当时想到要把这个玩意儿变成代码，想想都觉得可怕。

但是很多事情不去尝试下就放弃了的话，就弄不清楚到底是问题到底真滴是不是很困难，因为有些问题总是看起来比较麻烦，但其实很简单。

就像中学时代学数学的时候，我们数学老师也是我们班主任对我们说的那样，有些题目会有很多行字来描述这个问题，使得学生第一眼看上去就觉得非常困难，但是等你真的阅读完题目后往往都很简单，那些只用寥寥数语就把题目描述完毕的问题反而会特别的困难。



代码结构
本篇只解决两个问题，图的深度遍历和广度遍历。所以显然只要两个函数就解决了，但是考虑到整张图中并不一定是连通的，这个时候遍历就需要输出图中各个连通分量。

以广度优先遍历为例，BFSTraverse(x)函数每次从顶点x出发，使用_BFS()函数遍历图中以x为起点的一个连通分量。如果从x开始不能遍历到图中的所有顶点，则BFSTraverse(x)会尝试从另一个没有被访问过的顶点开始求其连通分量，直到图中所有的顶点都被访问过了。

其中visted数组的作用就是标记顶点是否有被访问过。

BFSTraverse()函数：

初始时，BFSTraverse()函数设置一个visited数组，将其全部赋值为false表示所有的节点都没有被访问过。然后使用_BFS()函数来求以顶点x为起点的连通分量，并将visited数组作为参数传入。

当_BFS()函数求出以顶点x为起点的连通分量后，BFSTraverse()函数则再次遍历visited数组，查看是否还有未被访问过的节点。如果还有，则再次调用_BFS()函数，并传入未被访问过的顶点和visited数组。等到所有的节点都被访问过后，返回结果。



_BFS()函数：

_BFS()函数中使用了两个循环，外层循环每次从队列中取出一个顶点，使用内层循环依次访问该顶点的边表中的所有节点。

内层循环不断的将当前起始节点的所有边表节点加入队列（只有在这些节点未被访问过时），当遍历完当前顶点的所有的边表节点后，从队列中取出一个节点再次开始循环，直到队列为空结束。

简而言之，_BFS()函数干的事情就是从顶点x出发，依次访问与x相邻的节点，然后再从这些相邻的节点挨个出发再访问各自的相邻节点。为了不重复访问同一个节点，使用visited数组做访问标识，如果发现要访问的节点已经被访问过了就跳过这个节点。

与广度优先遍历一样，深度优先遍历也使用了一个标记数组，作用是相同的。

DFSTraverse()函数：

初始时，DFSTraverse()函数设置一个visited数组，将其全部赋值为false表示所有的节点都没有被访问过。然后使用_DFS()函数来求以顶点x为起点的连通分量，并将visited数组作为参数传入。

当_DFS()函数求出以顶点x为起点的连通分量后，DFSTraverse()函数再次遍历visited数组，查看是否还有未被访问过的节点。如果还有，则再次调用_DFS()函数，并传入未被访问过的顶点和visited数组。等到所有的节点都被访问过后，返回结果。

_DFS()函数：

在思路中说道

当不能再继续向下访问时，依次退回到最近被访问的顶点
这就想到到了使用一个堆栈来辅助完成遍历。每次遇到一个节点，就将其压入堆栈，做已访问标识后访问其一个相邻的节点：

1、如果发现这个节点的相邻节点中有未被访问过的，则访问这个节点，并将其压入堆栈，做已访问标识，再访问这个节点的一个相邻节点...

2、如果这个节点的所有相邻节点都被访问过了，而此时堆栈还不为空，就将其弹出去。再取堆栈的栈顶元素重复步骤1的操作，如果这个节点的所有相邻节点又全被访问过了，就再将其弹出去...，依此往复，直到堆栈为空结束。
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
}

// 首先需要构建出这张图来：

let arr = ['V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8'];
let myGraph = new Graph(0); // 0表示无向图
myGraph.initVertex(arr);
// 插入边
myGraph.addEdge('V0', 'V1');
myGraph.addEdge('V0', 'V5');
myGraph.addEdge('V1', 'V2');
myGraph.addEdge('V1', 'V6');
myGraph.addEdge('V1', 'V8');
myGraph.addEdge('V2', 'V3');
myGraph.addEdge('V2', 'V8');
myGraph.addEdge('V3', 'V4');
myGraph.addEdge('V3', 'V6');
myGraph.addEdge('V3', 'V7');
myGraph.addEdge('V3', 'V8');
myGraph.addEdge('V4', 'V5');
myGraph.addEdge('V4', 'V7');
myGraph.addEdge('V5', 'V6');
myGraph.addEdge('V6', 'V7');
// 输出这张图的邻接列表看看：

for (let i = 0; i < arr.length; i++) {
  myGraph.allNeightbors(arr[i]);
}

// 输出：
/*
V0=>V1=>V5
V1=>V0=>V2=>V6=>V8
V2=>V1=>V3=>V8
V3=>V2=>V4=>V6=>V7=>V8
V4=>V3=>V5=>V7
V5=>V0=>V4=>V6
V6=>V1=>V3=>V5=>V7
V7=>V3=>V4=>V6
V8=>V1=>V2=>V3
*/

// 从这个输出邻接列表来看，图已经被顺利的构造出来了。
// 下面分别从顶点V0到V8依次广度优先遍历这棵树：

for (let i = 0; i < arr.length; i++) {
  console.log(myGraph.BFSTraverse(arr[i]));
}

// 输出：
/*
V0->V1->V5->V2->V6->V8->V4->V3->V7
V1->V0->V2->V6->V8->V5->V3->V7->V4
V2->V1->V3->V8->V0->V6->V4->V7->V5
V3->V2->V4->V6->V7->V8->V1->V5->V0
V4->V3->V5->V7->V2->V6->V8->V0->V1
V5->V0->V4->V6->V1->V3->V7->V2->V8
V6->V1->V3->V5->V7->V0->V2->V8->V4
V7->V3->V4->V6->V2->V8->V5->V1->V0
V8->V1->V2->V3->V0->V6->V4->V7->V5
*/

// 可见这是从顶点V0开始的广度优先遍历中正确的一种。
// 如果断开V0和V1，V5的连接， 且还是从V0开始遍历会发生什么呢？

// 首先断开V0和V1、V5的连接：

myGraph.removeEdge('V0', 'V1');
myGraph.removeEdge('V0', 'V5');

for (let i = 0; i < arr.length; i++) {
  console.log(myGraph.BFSTraverse(arr[i]));
}

// 输出：
/*
V0&V1->V2->V6->V8->V3->V5->V7->V4
V1->V2->V6->V8->V3->V5->V7->V4&V0
V2->V1->V3->V8->V6->V4->V7->V5&V0
V3->V2->V4->V6->V7->V8->V1->V5&V0
V4->V3->V5->V7->V2->V6->V8->V1&V0
V5->V4->V6->V3->V7->V1->V2->V8&V0
V6->V1->V3->V5->V7->V2->V8->V4&V0
V7->V3->V4->V6->V2->V8->V5->V1&V0
V8->V1->V2->V3->V6->V4->V7->V5&V0
*/
// 可以看到V0成了一个单独的连通分量。

// 同样使用图1分别从顶点V0到V8对其进行深度优先遍历操作：

for (let i = 0; i < arr.length; i++) {
  console.log(myGraph.DFSTraverse(arr[i]));
}

// 输出：
/*
V0->V1->V2->V3->V4->V5->V6->V7->V8
V1->V0->V5->V4->V3->V2->V8->V6->V7
V2->V1->V0->V5->V4->V3->V6->V7->V8
V3->V2->V1->V0->V5->V4->V7->V6->V8
V4->V3->V2->V1->V0->V5->V6->V7->V8
V5->V0->V1->V2->V3->V4->V7->V6->V8
V6->V1->V0->V5->V4->V3->V2->V8->V7
V7->V3->V2->V1->V0->V5->V4->V6->V8
V8->V1->V0->V5->V4->V3->V2->V6->V7
*/

// 使用图2来测试下：

for (let i = 0; i < arr.length; i++) {
  console.log(myGraph.DFSTraverse(arr[i]));
}

// 输出：
/*
V0&V1->V2->V3->V4->V5->V6->V7->V8
V1->V2->V3->V4->V5->V6->V7->V8&V0
V2->V1->V6->V3->V4->V5->V7->V8&V0
V3->V2->V1->V6->V5->V4->V7->V8&V0
V4->V3->V2->V1->V6->V5->V7->V8&V0
V5->V4->V3->V2->V1->V6->V7->V8&V0
V6->V1->V2->V3->V4->V5->V7->V8&V0
V7->V3->V2->V1->V6->V5->V4->V8&V0
V8->V1->V2->V3->V4->V5->V6->V7&V0
*/
