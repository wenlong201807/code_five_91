/**
 * 通过 https://leetcode-cn.com/problems/course-schedule-ii/submissions/
 * 00：38：00-00：50：00
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * 思路
 * 返回的数组是学习的顺序，如果不能全部修完，就返回空。
 * 其实就是要我们返回一个拓扑排序
 * 
 * 利用indeg存储每个顶点的入度
 * 入度：该顶点有几个前序顶点
 * 收集入度为0的顶点，先输出
 * 遍历入度为0的顶点的邻接表，相应将入度-1，push进0的入读数组
 * 周而复始
 * 时间复杂度 0n。图中的每个顶点都处理了依次
 * 空间复杂度 0n。我们使用了一个中间的队列数据结构来储存所有具有0入度的顶点。
 * 在最坏的情况下，没有任何先序顶点，队列会包括所有的顶点。
 */
var findOrder = function (numCourses, prerequisites) {
  const indeg = new Array(numCourses).fill(0);// 入度数组
  const map = {};// 邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    indeg[prerequisites[i][0]]++;// 求每一堂课的初始入度值
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);// 添加依赖它的后续课
    } else {// 当前课不存在邻接表
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }
  const queue = [];// 处理入度为0的节点，存到队列
  for (let i = 0; i < indeg.length; i++) {
    if (indeg[i] === 0) {
      queue.push(i);
    }
  }
  // let cnt = 0;// 当前选的课程
  let ans = [];// 学课程的先后顺序
  while (queue.length) {
    const selected = queue.shift();
    // cnt++;
    ans.push(selected);
    const toEnQueue = map[selected];// 当前课程的后续课程
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        indeg[toEnQueue[i]]--;
        if (indeg[toEnQueue[i]] === 0) {
          queue.push(toEnQueue[i]);
        }
      }
    }
  }

  // return cnt === numCourses;// 选修了所有的课程
  if (ans.length === numCourses) return ans;
  return [];
};