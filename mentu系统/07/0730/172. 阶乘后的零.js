/**
 * 通过 https://leetcode-cn.com/problems/factorial-trailing-zeroes/submissions/
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let m = 5, cnt = 0;
  while (n / m) {
    cnt += Math.floor(n / m);
    m *= 5;
  }
  return cnt;
};