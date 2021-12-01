// https://leetcode-cn.com/problems/coin-change-2/submissions/

// 参考学习 https://github.com/azl397985856/leetcode/blob/master/problems/518.coin-change-2.md

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function (amount, coins) {
  if (amount === 0) return 1;

  const dp = [1].concat(Array(amount).fill(0));

  for (let j = 0; j < coins.length; j++) {
    for (let i = 1; i < amount + 1; i++) {
      if (i - coins[j] >= 0) {
        dp[i] = dp[i] + dp[i - coins[j]];
      }
    }
  }

  return dp[dp.length - 1];
};