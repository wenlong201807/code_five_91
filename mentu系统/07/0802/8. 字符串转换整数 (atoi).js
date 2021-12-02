/**
 * 通过 https://leetcode-cn.com/problems/string-to-integer-atoi/submissions/
 * @param {string} s
 * @return {number}
 * 实现parseInt() 功能
 */
var myAtoi = function (s) {
  const number = parseInt(s, 10);
  const Max = Math.pow(2, 31) - 1;
  const Min = Math.pow(-2, 31);
  // 无法转换成整数，直接返回0
  if (isNaN(number)) {
    return 0;
  }

  // 计算数据是否超界
  if (number < Min || number > Max) {
    return number < 0 ? Min : Max;
  }

  return number;
};