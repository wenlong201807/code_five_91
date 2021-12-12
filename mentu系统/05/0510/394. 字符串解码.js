/**
 * 01:30:20 - 01:48:54
 * 通过 https://leetcode-cn.com/problems/decode-string/submissions/
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let numStack = [];// 倍数栈
  let strStack = [];// 待拼接的字符串栈
  let num = 0;
  let result = '';// 当前遍历到的字符串
  for (const char of s) {
    if (!isNaN(char)) {
      num = num * 10 + Number(char);
    } else if (char == '[') {
      strStack.push(result);
      result = '';
      numStack.push(num);
      num = 0;
    } else if (char == ']') {
      let repeaTimes = numStack.pop();
      result = strStack.pop() + result.repeat(repeaTimes);
    } else {
      result += char;// 遇到字母的时候，追加给一个result串
    }
  }
  return result;
};