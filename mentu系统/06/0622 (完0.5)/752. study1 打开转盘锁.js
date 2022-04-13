/**
 * 通关 https://leetcode-cn.com/problems/open-the-lock/submissions/
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 * 02:04:26
 */
var openLock = function (deadends, target) {
  let path = '0000';
  const queue = [path];
  const visited = {};// 已经访问的节点
  const dead = {};// 已经死亡的节点
  let step = 0;// 最少的拨动次数
  const swipeUp = (path, index) => {
    const arr = path.split('');
    if (arr[index] === '9') {
      arr[index] = '0';
    } else {
      arr[index]++;
    }
    return arr.join('');
  }

  const swipeDown = (path, index) => {
    const arr = path.split('');
    if (arr[index] === '0') {
      arr[index] = '9';
    } else {
      arr[index]--;
    }
    return arr.join('');
  }

  for (let num of deadends) {
    dead[num] = true;
  }

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const password = queue.shift();
      if (dead[password]) continue;// 剪枝
      if (password === target) return step; // 最优解
      for (let j = 0; j < 4; j++) {
        const upPassword = swipeUp(password, j)
        const downPassword = swipeDown(password, j);
        !visited[upPassword] && queue.push(upPassword) && (visited[upPassword] = true); // 剪枝
        !visited[downPassword] && queue.push(downPassword) && (visited[downPassword] = true); // 剪枝
      }
    }
    step++;
  }
  return -1;
};