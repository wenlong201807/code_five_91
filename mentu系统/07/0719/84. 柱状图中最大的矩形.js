/**
 * 通过 https://leetcode-cn.com/problems/largest-rectangle-in-histogram/submissions/
 * @param {number[]} heights
 * @return {number}
 * 思路：
 * 当前值，往左找，或者往右找，找到第一个比当前值小的，对比两个之间的更大矩形，即为当前更大矩形
 */
var largestRectangleArea = function (heights) {
  let stack = [];
  let l = new Array(heights.length), r = new Array(heights.length);
  let n = heights.length;
  for (let i = 0; i < n; i++) l[i] = -1, r[i] = n;
  // 当前元素出发，往前，往后找
  for (let i = 0; i < n; i++) {
    // 判断右边
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      r[stack[stack.length - 1]] = i;
      stack.pop();
    }
    // 判断左边
    if (stack.length) l[i] = stack[stack.length - 1];
    stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, heights[i] * (r[i] - l[i] - 1));
  }
  return ans;
};