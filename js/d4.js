/**
 * 题目 https://leetcode-cn.com/problems/decode-string/
 * 通关 https://leetcode-cn.com/problems/decode-string/solution/394-zi-fu-chuan-jie-ma-by-zhu-wen-long-2-4nn1/
 * @param {string} s
 * @return {string}
 */

function checkRate(input) {
  var re = /^[0-9]+.?[0-9]*/;
  //判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/
  return re.test(input);
}
var decodeString = function (s) {
  const stack = [];
  // let result = '';
  // let leftNum = 0;
  let numStr = '';
  for (let i = 0; i < s.length; i++) {
    if (checkRate(s[i])) {
      numStr += s[i];
      continue;
    } else {
      if (numStr) stack.push(numStr);
      numStr = '';

      if (s[i] !== ']') {
        stack.push(s[i]);
      } else {
        let tempStr = '';
        while (stack.length) {
          const curStr = stack.pop();
          // tempStr = curStr + tempStr;
          if (curStr !== '[') {
            tempStr = curStr + tempStr;
          } else {
            break;
          }
        }
        let curNum = stack.pop();
        stack.push(tempStr.repeat(curNum));
      }
    }
  }
  console.log(stack.join());
  return stack.join();
}

const s = "10[ode]";
// const s = '3[a2[c]]';
decodeString(s);
