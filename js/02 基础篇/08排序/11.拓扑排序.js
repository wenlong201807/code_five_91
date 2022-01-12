// 参考学习 https://blog.csdn.net/zjw_python/article/details/85233809

/*
1 定义
在一个表示工程的有向图中，用顶点表示活动，用弧表示活动之间的优先关系，这样的有向图为顶点表示活动的网，称为AOV网（Activity On Vertex Network）

设G={V,E}是一个具有n个顶点的有向图，V中的顶点序列v1、v2… 满足若从顶点vi到vj有一条路径，则在顶点序列中顶点vi必须在顶点vj之前，则称这样的顶点序列为一个拓扑序列

拓扑排序就是对一个有向图构造拓扑序列的过程，构造时会有两个结果，如果此网的全部顶点都被输出，则说明它是不存在环（回路）的AOV网；如果输出顶点数少了，说明这个网存在环（回路），不是AOV网。一个不存在回路的AOV网，可以应用在各种各样的工程或项目的流程图中，满足各种应用场景的需要。

对AOV网进行拓扑排序的基本思路是：

从AOV网中选择一个入度为0的顶点输出
然后删除此顶点及所有以此顶点为尾的弧
继续重复以上2个步骤，直到输出全部顶点或者AOV网中不存在入度为0的顶点为止
2 建立测试图

*/
// 顶点数
class vex{
	constructor(value){
		this.data = value;
		this.firstEdge = null;
		this.in = 0;   //用于存放顶点的入度
	}
}

// 子节点
class adjvex{
	constructor(node,weight){
		this.node = node;
		this.weight = weight;
		this.next = null;
	}
}

class Graph{
	constructor(v,vr){
		let len = v.length;
		let vexs = new Array(len);
		let v1=0,v2=0;
		let newvex = null;
		for (let i=0;i<len;i++){
			vexs[i] = new vex(v[i]);
		}
		for (let arc of vr){
      // debugger
			v1 = v.indexOf(arc[0]);// 起点是否存在 索引值
			v2 = v.indexOf(arc[1]);// 终点是否存在

			newvex = new adjvex(v2,arc[2]);
			newvex.next = vexs[v1].firstEdge;// 链表next指针连接
			vexs[v1].firstEdge = newvex;
			vexs[v2].in++; // 入度数量累加
		}
		this.adjList = vexs;
	}
}

let a = new Graph(
  ['v0','v1','v2','v3','v4','v5','v6','v7','v8','v9','v10','v11','v12','v13'],
  [
    ['v0','v4',1],
    ['v0','v11',1],
    ['v0','v5',1],
    ['v1','v4',1],
    ['v1','v8',1],
    ['v1','v2',1],
    ['v2','v5',1],
    ['v2','v6',1],
    ['v2','v9',1],
    ['v3','v2',1],
    ['v3','v13',1],
    ['v4','v7',1],
    ['v5','v8',1],
    ['v5','v12',1],
    ['v6','v5',1],
    ['v8','v7',1],
    ['v9','v11',1],
    ['v9','v10',1],
    ['v10','v13',1],
    ['v12','v9',1]
  ]
);
console.log(a);

// 拓扑排序算法
// 第一次循环将入度为0的顶点入栈时间复杂度为O（n），在while循环中，扫描邻接顶点，时间复杂度为O（e），因此整体算法的时间复杂度为O（n+e）。
function topoSort(G){
	let stack = [];    //辅助栈
	for (let i=0;i<G.adjList.length;i++){   //寻找入度为0的顶点推入栈
		if (G.adjList[i].in === 0){
			stack.push(i);
		}
	}
  console.info('stack:', stack);
  debugger

	let currentVex = null;
	let count = 0;         //用于计数已经输出的顶点
  // while 虽是嵌套，但是没有叠加，牛逼的地方
	while(stack.length > 0){
		currentVex = G.adjList[stack.pop()];
		console.log(currentVex.data);      //输出栈顶顶点
		count++;
		currentVex = currentVex.firstEdge;
		while(currentVex){        //删除当前顶点，遍历其邻接顶点，使它们入度减1
			if ((--G.adjList[currentVex.node].in) === 0){  //当邻接顶点入度为0时
				stack.push(currentVex.node);    //将邻接顶点压入栈中
			}
			currentVex = currentVex.next;// 链表依次执行的机制
		}
	}

	if (count < G.adjList.length){   //若输出的顶点数少于图中顶点数，则存在环
		console.log("存在环路");
		return false;
	}else{
		return true;
	}
}

console.info(topoSort(a));
