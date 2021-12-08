/**
 * 通过 https://leetcode-cn.com/problems/k-th-symbol-in-grammar/submissions/
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 依据题意的要求发现
 * 对题目里面给出的k进行奇偶判断：期数，则对2整除。余数+1。去找上一行的余数+1个数
 */
var kthGrammar = function (N, K) {
  if (N === 1) return 0;
  if (K % 2 === 0) {
    return kthGrammar(N - 1, K / 2) === 0 ? 1 : 0;
  } else {
    return kthGrammar(N - 1, Math.floor(K / 2) + 1);
  }
};