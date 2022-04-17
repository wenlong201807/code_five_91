// https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC

/*
难度：中等

给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。
假设每一种面额的硬币有无限个。

示例 1:
输入: amount = 5, coins = [1, 2, 5] 输出: 4 
解释: 有四种方式可以凑成总金额: 
5=5 
5=2+2+1 
5=2+1+1+1 
5=1+1+1+1+1

示例 2: 输入: amount = 3, coins = [2] 输出: 0 解释: 只用面额2的硬币不能凑成总金额3。
示例 3: 输入: amount = 10, coins = [10] 输出: 

题意理解: 要求凑成总和的组合数，元素之间要求没有顺序
*/
const change = (amount, coins) => {
  let dp = Array(amount + 1).fill(0); // 初始化时 总价为amount，各个低价位的组合数
  dp[0] = 1; // 总价为0，组合数仅1中，不需要任何硬币

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
};

const amount = 5, coins = [1, 2, 5];
change(amount, coins)