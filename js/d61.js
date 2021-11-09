var canPartition = function (nums) {
  const sum = (nums.reduce((p, v) => p + v));
  if (sum & 1) return false;
  const dp = Array(sum / 2 + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      if (dp[j] === sum / 2) {
        return true;
      }
    }
  }
  return dp[sum / 2] === sum / 2;
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/bang-ni-ba-0-1bei-bao-xue-ge-tong-tou-by-px33/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。