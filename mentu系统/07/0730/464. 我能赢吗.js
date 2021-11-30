/**
 * 参考学习 https://leetcode-cn.com/problems/can-i-win/solution/di-gui-dong-tai-gui-hua-by-chenchen-8-i3ck/
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 * 未通过
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  // 直接获胜
  if (maxChoosableInteger >= desiredTotal) return true;
  // 全部拿完也无法达到
  var sum = maxChoosableInteger * (maxChoosableInteger + 1) / 2;
  if (desiredTotal > sum) return false;
  var dp = {};// 记忆化
  // total剩余的数量  state 使用0和1表述数量是否被拿出来过【二进制】
  function f (total, state) {
    // 有缓存
    if (dp[state] !== undefined) return dp[state];
    for (var i = 0; i <= maxChoosableInteger; i++) {
      var curr = 1 << i;
      // 表示这个数据被拿出来比较过
      if (curr & state) continue; // 此处是二进制，注意写法
      // 直接获胜 
      if (i >= total) return dp[state] = true;
      // 让对手输掉
      if (!f(total - i, state | curr)) return dp[state] = true;
    }
    // 没有任何让对方输的方法
    return dp[state] = false;
  }
  return f(desiredTotal, 0);
};