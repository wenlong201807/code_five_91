/**
 * 已经通关 https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length < 1) {
    return 0
  }

  let dp = [] // 对应原数组中对应下标位置累计的最长递增子序列的个数

  let result = -1 << 31 // 递增子序列最大长度值

  for (let i = 0; i < nums.length; i++) {
    // debugger
    dp[i] = 1 // 包含自己是子序列的一项
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    result = Math.max(result, dp[i])
  }

  return result
};

const nums = [10,9,2,5,3,7,101,18]

lengthOfLIS(nums);