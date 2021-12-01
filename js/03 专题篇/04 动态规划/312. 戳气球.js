var maxCoins = function (nums) {
  const n = nums.length;
  let points = [1, ...nums, 1]; //两边添加虚拟气球
  const dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0)); //dp数组初始化
  //自底向上转移状态
  for (let i = n; i >= 0; i--) {
    //i不断减小
    for (let j = i + 1; j < n + 2; j++) {
      //j不断扩大
      for (let k = i + 1; k < j; k++) {
        //枚举k在i和j中的所有可能
        //i-j能获得的最大数量的金币等于 戳破当前的气球获得的金钱加上之前i-k,k-j区间中已经获得的金币
        dp[i][j] = Math.max(
          //挑战最大值
          dp[i][j],
          dp[i][k] + dp[k][j] + points[j] * points[k] * points[i]
        );
      }
    }
  }
  return dp[0][n + 1];
};

// 作者：chen-wei-f
// 链接：https://leetcode-cn.com/problems/burst-balloons/solution/312-chuo-qi-qiu-dong-tai-gui-hua-by-chen-1sre/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
