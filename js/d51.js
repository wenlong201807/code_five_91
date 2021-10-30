/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  if (grid.length < 2) return -1;
  let n = grid.length;
  // 创建 dp 状态矩阵
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = grid[i][j] ? 0 : Infinity;
    }
  }
  // 从左上向右下遍历
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) continue;
      if (i - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
      if (j - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
    }
  }
  // 从右下向左上遍历
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j]) continue;
      if (i + 1 < n) dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
      if (j + 1 < n) dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
    }
  }
  let ans = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid[i][j]) ans = Math.max(ans, dp[i][j]);
    }
  }
  if (ans === Infinity) {
    return -1;
  } else {
    return ans;
  }
};

// 作者：chenwenwu
// 链接：https://leetcode-cn.com/problems/as-far-from-land-as-possible/solution/javascriptjs-dong-tai-gui-hua-jie-fa-by-chenwenwu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
