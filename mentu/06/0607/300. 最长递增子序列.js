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

  let dp = []

  let result = -1 << 31

  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    result = Math.max(result, dp[i])
  }

  return result
};