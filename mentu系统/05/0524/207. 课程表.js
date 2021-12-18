/**
 * 通过 https://leetcode-cn.com/problems/course-schedule/submissions/
 * 00：00：00 - 00：38：00
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
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
  let cnt = 0;// 当前选的课程
  while (queue.length) {
    const selected = queue.shift();
    cnt++;
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

  return cnt === numCourses;// 选修了所有的课程
};