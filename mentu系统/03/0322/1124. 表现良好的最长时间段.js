/**
 * 通过 https://leetcode-cn.com/problems/longest-well-performing-interval/submissions/
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  // 将大于8的认为为1 小于等于8的为-1 然后 求整个数组的前缀和
  let preSum = new Array(hours.length + 1).fill(0);
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) preSum[i + 1] = preSum[i] + 1;
    else preSum[i + 1] = preSum[i] - 1;
  }

  // 生成一个单调栈记录i的备选项
  let stack = [];
  stack.push(0);
  for (let i = 0; i < preSum.length; i++) {
    if (preSum[i] < preSum[stack[stack.length - 1]]) stack.push(i);
  }

  // 倒序遍历前缀和数组，求出最大值
  let max = 0;
  for (let i = preSum.length - 1; i > max; i--) {
    while (stack.length && preSum[stack[stack.length - 1]] < preSum[i]) {
      max = Math.max(max, i - stack.pop());
    }
  }

  return max;
};