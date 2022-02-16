/**
 * 通过 https://leetcode-cn.com/problems/baseball-game/submissions/
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let result = [];
  for (num of ops) {
    switch (num) {
      case 'C':
        result.pop();
        break;
      case 'D':
        result.push(result[result.length - 1] * 2);
        break;
      case '+':
        result.push(result[result.length - 1] + result[result.length - 2]);
        break;
      default:
        result.push(Number(num));
        break;
    }
  }

  return result.reduce((a, b) => a + b);
};