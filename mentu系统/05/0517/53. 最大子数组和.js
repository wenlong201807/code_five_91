/**
 * 通过
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length < 1) {
    return 0
  }

  let dp = []

  //设置初始化值 
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    //处理 dp[i-1] < 0 的情况
    if (dp[i - 1] < 0) {
      dp[i] = nums[i]
    } else {
      dp[i] = dp[i - 1] + nums[i]
    }
  }

  let result = -1 << 31

  for (let j = 0; j < dp.length; j++) {
    result = Math.max(result, dp[j])
  }

  return result
};

// 方法二
// 区间和，前缀和
// 归并代码留在这，自己慢慢理解
// 通过 https://leetcode-cn.com/problems/maximum-subarray/submissions/
var maxSubArray = function (nums) {
  const len = nums.length;
  let max = nums[0];
  let min = 0;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (sum - min > max) max = sum - min;
    if (sum < min) {
      min = sum;
    }
  }
  return max;
}