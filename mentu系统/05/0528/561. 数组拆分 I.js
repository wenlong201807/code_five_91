/**
 * @param {number[]} nums
 * @return {number}
 * 排完序之后的，下标为偶数到元素相加=最小值的最大总和
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let len = nums.length
  let i = 0
  let result = 0
  while (i < len) {
    result = result + nums[i]
    i = i + 2
  }
  return result
};

// 第二种写法
// 通过 https://leetcode-cn.com/problems/array-partition-i/submissions/
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let ans = 0;
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i];
  }
  return ans;
};