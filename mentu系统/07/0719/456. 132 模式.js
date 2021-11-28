/**
 * 通过 https://leetcode-cn.com/problems/132-pattern/submissions/
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let stack = [], med = -Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < med) return true;
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      med = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
};