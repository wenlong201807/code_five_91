/**
 * 通过 https://leetcode-cn.com/problems/task-scheduler/submissions/
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const freq = _.countBy(tasks);

  // Object.values() 手动循环对象的属性值 所给出的顺序相同。
  // 对象中的扩展运算符 ，用户取出参数对象中的所有可遍历的属性，拷贝到当前对象之中
  const maxExec = Math.max(...Object.values(freq));
  let maxCount = 0;
  Object.values(freq).forEach((v) => {
    if (v === maxExec) {
      maxCount++;
    }
  });

  return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);
};

// 方法二 简单易懂
var leastInterval2 = function (tasks, n, h = Array(26).fill(0)) {
  if (n === 0) return tasks.length;
  for (var i = 0; i < tasks.length; i++) h[tasks[i].charCodeAt() - 65]++;
  var max = Math.max(...h),
    maxCount = 0;
  h.forEach((n) => n === max && maxCount++);
  // console.log('h:', h);
  // console.log(Math.max((max - 1) * (n + 1) + maxCount, tasks.length));
  return Math.max((max - 1) * (n + 1) + maxCount, tasks.length);
};

// 作者：mantoufan
// 链接：https://leetcode-cn.com/problems/task-scheduler/solution/ju-zhen-tan-xin-suan-fa-6xing-dai-ma-2ji-on60/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

const tasks = ['A', 'A', 'A', 'B', 'B', 'B'],
  n = 2;
leastInterval2(tasks, n);

// 方法三 大根堆
var leastInterval = function (tasks, n, r = 0) {
  if (n === 0) return tasks.length;
  var h = new Map(),
    cools = new Set(),
    q = new PriorityQueue();
  for (var i = 0; i < tasks.length; i++)
    h.set(tasks[i], h.has(tasks[i]) ? h.get(tasks[i]) + 1 : 1);
  h.forEach((v, i) => q.add(v, i));
  while (q.length()) {
    var a = [],
      top,
      t;
    while ((top = q.shift()))
      if (cools.has(top.second)) a.push(top);
      else break;
    while (a.length) q.add((t = a.pop()).v, t.second);
    if (top === void 0) cools.add(r + 'wait');
    else {
      cools.add(top.second);
      if (top.v > 1) q.add(top.v - 1, top.second);
    }
    if (cools.size > n) cools.delete(cools.keys().next().value);
    r++;
  }
  return r;
};

class PriorityQueue {
  constructor(a) {
    this.q = [];
    a && this._build(a);
  }
  add(v, second) {
    // 添加
    this.q.push({ v, second }); // 添加 值（比较用） 和 第二参数（索引）
    this._up(this.q.length - 1); // 放入 二叉树的尾部，然后 上浮
  }
  shift() {
    // 弹出
    var n = this.q.shift(); // 弹出 根节点
    if (this.q.length) {
      // 如果还有节点
      this.q.unshift(this.q.pop()); // 将 最尾部的节点 放到根节点位置
      this._down(0); // 下沉 根节点
    }
    return n;
  }
  first() {
    // 根节点
    return this.q[0];
  }
  length() {
    // 优先队列长度
    return this.q.length;
  }
  _build(a) {
    // 初始化
    this.q.push({ v: a[0] }); // 先给空队列放入第0个元素
    for (var i = 1; i < a.length; i++)
      this.q.unshift({ v: a[i] }), this._down(0);
    // 从第1个元素起，把新元素放在根节点，然后下沉 根节点
  }
  _swap(l, r, t) {
    // 交换
    (t = this.q[l]), (this.q[l] = this.q[r]), (this.q[r] = t); // 交换两个节点
  }
  _down(i) {
    // 下沉
    var t = (this.q.length - 2) >> 1,
      max,
      maxI; // 叶子节点的根节点索引，下沉到 叶子节点的根节点停止
    while (i <= t) {
      var l = i * 2 + 1,
        r = l + 1; // 左子节点的索引 = 当前节点索引 * 2 + 1，右子节点的索引 = 左子节点的索引 + 1
      if (
        (this.q[l] ? this.q[l].v : -Infinity) >
        (this.q[r] ? this.q[r].v : -Infinity)
      )
        (max = this.q[l].v), (maxI = l);
      else (max = this.q[r].v), (maxI = r); // 找到 左子节点 和 右子节点的 较大者
      if (this.q[i].v < max) this._swap(i, maxI), (i = maxI);
      // 当前节点的 左子节点 或 右子节点 比 它大，交换
      else break;
    }
  }
  _up(i) {
    // 上浮
    while (i > 0) {
      // 不能超过根节点
      var t = (i - 1) >> 1; // 当前节点的 根节点索引 = 当前节点索引 - 1 的一半
      if (this.q[i].v > this.q[t].v) this._swap(i, t), (i = t);
      // 当前节点值 比 它的根节点 大，交换
      else break;
    }
  }
}

// 作者：mantoufan
// 链接：https://leetcode-cn.com/problems/task-scheduler/solution/ju-zhen-tan-xin-suan-fa-6xing-dai-ma-2ji-on60/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
