/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let n = coins.length;
  let f = new Array(amount + 1).fill(Infinity);
  f[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      f[j] = Math.min(f[j], f[j - coins[i]] + 1);
    }
  }

  return f[amount] === Infinity ? -1 : f[amount];
};

// 作者：17dian
// 链接：https://leetcode-cn.com/problems/coin-change/solution/javascript-dong-tai-gui-hua-jie-fa-by-17-4s6g/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
