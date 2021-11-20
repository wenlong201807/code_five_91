/**
 * 通关 https://leetcode-cn.com/problems/matchsticks-to-square/submissions/
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  if (matchsticks === null || matchsticks.length === 0) return false;
  let allLen = 0;
  for (let item of matchsticks) {
    allLen += item;// 计算火柴的总长度
  }

  // 判断一下是否可以，或者刚好组成一个正方形
  if (allLen % 4 !== 0) return false;

  const silden = allLen / 4;

  // 计算边长
  matchsticks.sort((a, b) => b - a);
  // 可以优化搜索的范围，将火柴数组按着从大到小排序
  let sidelist = new Array(4).fill(0);
  for (let i = 0; i < sidelist.length; i++) {
    sidelist[i] = 0;
  }

  // 定义边长数组，重新赋值
  const dfs = (index) => {
    if (index === matchsticks.length) {
      // 判断四条边是否相等
      return (
        sidelist[0] === sidelist[1] &&
        sidelist[1] === sidelist[2] &&
        sidelist[2] === sidelist[3]
      )
    }
    const targetLen = matchsticks[index];
    // 当前处理的火柴
    if (targetLen > silden) {
      return false;
    }
    // 当前火柴数组按着从大到小排序
    for (let i = 0; i < 4; i++) {
      if (sidelist[i] + targetLen <= silden) {
        sidelist[i] += targetLen;
        if (dfs(index + 1)) {
          return true;
        }
        sidelist[i] -= targetLen;
        // 此处为回溯判断，先加上，再去递归判断下一步，
        // 如果能够组成正方形，返回true
        // 如果不能组成正方形，返回false，并且减去目标值
      }
    }
    return false;
  }

  return dfs(0);
};