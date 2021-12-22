/** 通过 https://leetcode-cn.com/problems/range-sum-of-sorted-subarray-sums/submissions/
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  let arr = [];
  // 去找子数组的区间和
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
    let temp = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      temp = temp + nums[j];
      arr.push(temp);
    }
  }
  // 排序
  let sArray = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum = (sum + sArray[i - 1]) % 1000000007;
  }
  return sum;
};