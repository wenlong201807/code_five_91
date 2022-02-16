/**
 * 通过 https://leetcode-cn.com/problems/valid-parentheses/submissions/
 * @param {string} s
 * @return {boolean}
 */
// 通过
var isValid = function (s) {
  let stack = [];
  let map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  for (ch of s) {
    if (map.has(ch)) {
      if (!stack.length || map.get(ch) !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return !stack.length;
};

// 方法二
var isValid = function (s) {
  let stack = [];
  for (ch of s) {
    switch (ch) {
      case '(':
      case '[':
      case '{':
        stack.push(ch);
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
    }
  }
  return !stack.length;
};