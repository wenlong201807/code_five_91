/**
 * 通过 https://leetcode-cn.com/problems/backspace-string-compare/submissions/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var processed = function (str) {
  let stack = [];
  for (ch of str) {
    if (ch === '#') {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join('');
}
var backspaceCompare = function (s, t) {
  return processed(s) === processed(t);
};