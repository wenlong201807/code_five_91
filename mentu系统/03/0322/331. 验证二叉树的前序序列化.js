/**
 * 通过 https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/submissions/
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let n = preorder.length;
  let stack = [1];
  let i = 0;
  while (i < n) {
    if (!stack.length) return false;
    if (preorder[i] === ',') i++;// 一个数值可能有多个数字组成 比如 123 是一个数值
    else if (preorder[i] === '#') {
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      i++;
    } else {
      while (i < n && preorder[i] !== ',') {
        i++;
      }
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      stack.push(2);
    }
  }
  return !stack.length;
};