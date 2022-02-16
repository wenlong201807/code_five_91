/**
 * @param {number} k
 * @return {number}
 * 分析题意
 * 这个题要求找出，除了这个数的本身之外，3，5，7，的倍数，这个区间内的数字都是由 (3**a) * (5**b) * (7**c)得来的，
 * 然后从小到大正数第k个数
 * 
 * 因此命名一个变量p3 来记录3的a次幂的值（被用了多少次），p3 从0开始计数
 * 一样的道理，p5便是记录5的b次幂的值，p5=0
 * 一样的道理，p5便是记录7的c次幂的值，p7=0
 * 
 * 接着，再命名一个dp的数组，用来存储每次乘完之后的值
 * 坑：乘法有个交换律，会导致重复结果
 */
// 通过 https://leetcode-cn.com/problems/get-kth-magic-number-lcci/submissions/
var getKthMagicNumber = function (k) {
  var p3 = 0;
  var p5 = 0;
  var p7 = 0;
  var dp = new Array(k);
  dp[0] = 1;
  for (let i = 1; i < k; i++) {
    // dp[i] = Math.min(dp[p3] * 3, Math.min(dp[p5] * 5, dp[p7] * 7));// 尽量取最小值
    dp[i] = Math.min(dp[p3] * 3, dp[p5] * 5, dp[p7] * 7);// 尽量取最小值 都可以
    // 去重操作
    if (dp[i] === dp[p3] * 3) p3++;
    if (dp[i] === dp[p5] * 5) p5++;
    if (dp[i] === dp[p7] * 7) p7++;
  }
  return dp[k - 1];
};