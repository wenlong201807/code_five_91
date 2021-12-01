/**
 * 通过 https://leetcode-cn.com/problems/max-value-of-equation/submissions/
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function (points, k) {
  let len = points.length, max = -Infinity, queue = [];
  for (let j = 0; j < len; j++) {
    let [xj, yj] = points[j];
    // 把队列头部不满足条件的给删除掉，|xi-yj|<=k
    while (queue.length > 0 && xj - queue[0][0] > k) queue.shift();
    // 更新最大值
    if (queue.length > 0) {
      max = Math.max(xj + yj + queue[0][1] - queue[0][0], max);
    }
    // 将当前的points[j] push 到队尾，把队列尾部points[j]的yi-xi;
    while (queue.length > 0 && (queue[queue.length - 1][1] - queue[queue.length - 1][0]) < (yj - xj)) {
      queue.pop();
    }
    queue.push(points[j]);
  }
  return max;
};