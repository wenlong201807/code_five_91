/**
 * 通过 https://leetcode-cn.com/problems/buddy-strings/submissions/
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * 解题关键点
 * 只有两种个情况我们才把这两个字符串判定为亲密字符串
 * 1 只有两处不同，并且两处不同时可以交换的，如 ab和ba
 * 2 a 和 b 完全相同，并且至少有一个字符串出现次数为两次及以上
 */
var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false;
  if (A === B) {
    return A.length > new Set(B).size;
  }
  let a = '';
  let b = '';
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      a = A[i] + a;
      b += B[i];
    }
  }
  return a.length === 2 && a === b;
};