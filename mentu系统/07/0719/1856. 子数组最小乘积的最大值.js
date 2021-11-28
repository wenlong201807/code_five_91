/**
 * 大神js https://leetcode-cn.com/problems/maximum-subarray-min-product/solution/javascriptsi-lu-qing-xi-de-qian-zhui-he-tgufq/
 * 
 * @param {number[]} nums
 * @return {number}
 * 思路
 * 最小值 = 数组的最小值 * 数组所有元素的和值
 * 一个数组中 最大值的子数组 最小乘积的最大值
 * 假设当前值 就是 子数组的最小值
 * 其实就是求：以当前值为最小值的子数组 最长可以切多长
 * 向左找到一个小于当前值的位置，向右找到一个小于当前值的位置
 * 中间这段数组的和值 就是最小乘积的第二个值，再乘以当前值，就是结果
 * 以每个数字作为子数组的最小值，求一个最大乘积，在所有乘积里面找一个最大值，这就是最后答案
 * 
 * 编程技巧
 * 如何快速求一段区间和和值 = 前缀和
 * 第一步：先求每一个元素的最大跨度，确定下标
 * 第二步：需要一个前缀和数组 算一下区间和
 * 注意 前缀和数组的下标是从1开始的，原数组下标是从0开始的
 * 其实就是上一道题84题的变种，这道乘的是跨度的和值。
 */
// 未通过
var maxSumMinProduct = function (nums) {
  let stack = [];
  const sum = [0];
  const mod = 1e9 + 7;
  for (let i = 0; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1]; // 前缀和
  }

  let len = nums.length;
  let right = new Array(len).fill(len);
  for (let i = 0; i < len; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      right[stack[stack.length - 1]] = i;
      stack.pop();
    }
    stack.push(i);
  }

  stack = [];
  let left = new Array(len).fill(-1);
  for (let j = len - 1; j >= 0; j--) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[j]) {
      left[stack[stack.length - 1]] = j;
      stack.pop();
    }
    stack.push(j);
  }


  // 根据前缀和 和left，right 数组进行枚举求解
  let max = BigInt(0);
  for (let k = 0; k < len; k++) {
    const total = BigInt(sum[right[k]] - sum[left[k] + 1]) * BigInt(nums[k]);
    if (max < total) {
      max = total;
    }
  }

  return max % BigInt(mod);
};