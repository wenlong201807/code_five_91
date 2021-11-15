const change = (amount, coins) => {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/coin-change-2/solution/dai-ma-sui-xiang-lu-518-ling-qian-dui-hu-q7gm/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
