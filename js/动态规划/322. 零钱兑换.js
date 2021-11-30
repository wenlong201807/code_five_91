const coinChange = (coins, amount) => {
  if (!amount) {
    return 0;
  }

  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/coin-change/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-wan-q-80r7/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
