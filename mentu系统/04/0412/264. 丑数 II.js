/**
 * 通过 https://leetcode-cn.com/problems/ugly-number-ii/submissions/
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  let dp = new Array();
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    // dp[i] = Math.min(dp[p2] * 2, Math.min(dp[p3] * 3, dp[p5] * 5));
    // 去重
    if (dp[i] === dp[p2] * 2) p2++;
    if (dp[i] === dp[p3] * 3) p3++;
    if (dp[i] === dp[p5] * 5) p5++;
  }
  return dp[n - 1];
};