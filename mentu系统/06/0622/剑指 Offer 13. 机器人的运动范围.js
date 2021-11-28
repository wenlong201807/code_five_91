/**
 * 通关 https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/submissions/
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  function getSum (num) {
    let answer = 0;
    while (num) {
      answer += num % 10;
      num = Math.floor(num / 10);
    }
    return answer;
  }

  const directionArray = [
    [-1, 0],// 上
    [0, 1],// 右
    [1, 0],// 下
    [0, -1],// 左
  ]

  let set = new Set(['0,0']);
  // 将遍历的坐标队列，要求从[0,0]开始走
  let queue = [[0, 0]];
  // 遍历队列中的坐标
  while (queue.length) {
    // 移除队首坐标
    let [x, y] = queue.shift();
    // 遍历方向
    for (let i = 0; i < 4; i++) {
      let offsetX = x + directionArray[i][0];
      let offsetY = y + directionArray[i][1];
      // 临界值判断
      if (offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || getSum(offsetX) + getSum(offsetY) > k || set.has(`${offsetX},${offsetY}`)) {
        continue;
      }

      // 走过的各自就不再纳入统计
      set.add(`${offsetX},${offsetY}`);
      // 将该坐标加入队列，因为这个坐标的四周没有走过，需要纳入下次的遍历
      queue.push([offsetX, offsetY]);
    }
  }
  return set.size;
};