/**
 * 通过 https://leetcode-cn.com/problems/next-greater-element-ii/submissions/
 * @param {number[]} nums
 * @return {number[]}
 * 将数组遍历两次，可以保证每一个数字的下一个最大值，都有排查过
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const ret = new Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n * 2 - 1; i++) {
    // 下一个更小
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      ret[stack[stack.length - 1]] = nums[i % n];
      stack.pop();
    }
    // 下一个更大
    stack.push(i % n);
  }

  return ret;
};