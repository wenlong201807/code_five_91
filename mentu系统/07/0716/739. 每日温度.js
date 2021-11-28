/**
 * 通过 https://leetcode-cn.com/problems/daily-temperatures/submissions/
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let res = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    // 删除操作
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let len = stack.length;
      if (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        res[stack[len - 1]] = i - stack[len - 1];
        stack.pop();
      }
    }
    stack.push(i);
  }

  return res;
};