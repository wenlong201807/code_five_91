/**
 * 通过 https://leetcode-cn.com/problems/validate-stack-sequences/submissions/
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [], cur = 0;
  for (item of pushed) {
    stack.push(item);
    while (stack.length && stack[stack.length - 1] === popped[cur]) {
      stack.pop();
      cur++;
    }
  }
  return !stack.length;
};