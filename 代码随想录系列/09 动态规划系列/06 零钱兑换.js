// https://programmercarl.com/0322.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC

const coinChange = (coins, amount) => {
  debugger
  if (!amount) {
    return 0;
  }

  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {// 遍历物品
    for (let j = coins[i]; j <= amount; j++) {// 遍历背包
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]); // 存储规则？？？
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

const coins = [1, 2, 5], amount = 5
coinChange(coins, amount);
