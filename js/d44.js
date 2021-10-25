var new21Game = function (N, K, W) {
  let dp = new Array(N + 1).fill(0);
  let sumArr = new Array(N + 1).fill(0);
  dp[0] = 1;
  for (let n = 1; n <= N; n++) {
    let left = Math.max(0, n - W);
    let right = Math.min(n - 1, K - 1);
    let p = 0;
    for (let i = left; i <= right; i++) {
      p += dp[i] / W;
    }
    dp[n] = p;
    sumArr[n] = sumArr[n - 1] + p;
  }
  let result = 0;
  for (let i = K; i <= N; i++) {
    result += dp[i];
  }
  return result;
};

// 作者：wanyan
// 链接：https://leetcode-cn.com/problems/new-21-game/solution/di-tui-gong-shi-yi-ji-xiang-xi-jie-ti-si-lu-by-wan/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
