/**
 * 通过 https://leetcode-cn.com/problems/basic-calculator-ii/submissions/
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim();
  let stack = new Array();
  let preSign = '+';
  let num = 0;
  for (let i = 0; i < s.length; i++){
    if (!isNaN(s[i]) && s[i] !== ' ') {
      num = num * 10 + Number(s[i]);
    }
    if (isNaN(s[i]) || i == s.length - 1) {
      switch (preSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(stack.pop() / num | 0);
          break;
      }
      preSign = s[i];
      num = 0;
    }
  }
  return stack.reduce((a, b) => a + b);
};