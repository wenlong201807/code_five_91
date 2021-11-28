/**
 * 通过 https://leetcode-cn.com/problems/trapping-rain-water/submissions/
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let stack = [];
  let ans = 0;
  const n = height.length;
  for (let i = 0; i < n; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1];
      const curHeight = Math.min(height[left], height[i]) - height[top];
      const curWidth = i - left - 1;
      ans += curHeight * curWidth;
    }
    stack.push(i);
  }
  return ans;
};