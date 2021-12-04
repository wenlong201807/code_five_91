/**
 * 通过 https://leetcode-cn.com/problems/remove-outermost-parentheses/submissions/
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let res = '';
  let opened = 0;
  for (ch of s) {
    // opend>0 已经有了一个左括号
    // 新找到的这个左括号，就认为它不是最外层的括号，就给他拼接起来，然后这个数量进行加一
    if (ch === '(' && opened++ > 0) res += ch;
    // opend>1 已经有了两个及以上左括号
    // 新找到的这个右括号，就认为它不是最外层的括号，就给他拼接起来，然后这个左括号的数量进行减一
    if (ch === ')' && opened-- > 1) res += ch;
  }
  return res;
};