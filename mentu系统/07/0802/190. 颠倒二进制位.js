/**
 * 通过 https://leetcode-cn.com/problems/reverse-bits/submissions/
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let ret = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
    ret |= (n & 1) << (31 - i);// 左移
    n >>>= 1;// 右移
  }
  return ret >>> 0;
};