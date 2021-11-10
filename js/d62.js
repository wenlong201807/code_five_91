const findTargetSumWays = (nums, target) => {
  const sum = nums.reduce((a, b) => a + b);

  if (target > sum) {
    return 0;
  }

  if ((target + sum) % 2) {
    return 0;
  }

  const halfSum = (target + sum) / 2;
  nums.sort((a, b) => a - b);

  let dp = new Array(halfSum + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = halfSum; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[halfSum];
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/target-sum/solution/dai-ma-sui-xiang-lu-494-mu-biao-he-01bei-rte9/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
