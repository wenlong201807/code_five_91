/**
 * 通过 https://leetcode-cn.com/problems/find-the-most-competitive-subsequence/submissions/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 维护单调递增栈
 */
var mostCompetitive = function (nums, k) {
  let stack = [], n = nums.length;
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[i] < stack[stack.length - 1] && n - i > k - stack.length) {
      stack.pop();
    }
    stack.push(nums[i]);
  }
  while (stack.length > k) stack.pop();
  return stack;
};