/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; ++i) {
    dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
  }

  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/min-cost-climbing-stairs/solution/dai-ma-sui-xiang-lu-dong-tai-gui-hua-wu-abbwz/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
