/**
 * 通过 https://leetcode-cn.com/problems/rabbits-in-forest/submissions/
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let map = new Map();// 使用map缓存每一种回答的数量
  let result = 0;// 缓存结果

  // 遍历所有答案，统计每一种回答出现的次数
  for (const ans of answers) {
    map.set(ans, map.has(ans) ? map.get(ans) + 1 : 1);
  }

  // 根据每种回答的次数，计算兔子数量
  for (const [ans, count] of map) {
    // 统计每类回答对应的兔子数量
    // 计算每一类回答可以分为几组
    result += Math.ceil(count / (ans + 1)) * (ans + 1);
  }

  return result;
};