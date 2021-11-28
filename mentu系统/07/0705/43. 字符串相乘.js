/**
 * 通关 https://leetcode-cn.com/problems/multiply-strings/submissions/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 1 两位数相乘，结果的长度是两位数的乘积长度
 * 2 0乘以任何数等于0
 * 
 * 3 考虑两位数相乘的规律
 * 4 进位时取整不取余
 * 5 多余0 删除
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  let len1 = num1.length;
  let len2 = num2.length;
  // 两个数的乘积的长度，肯定是小于等于 两个数原来的位数
  let array = new Array(len1 + len2).fill(0);
  let i = len1, j = len2;
  while (i) {
    i--;
    while (j) {
      j--;
      // 十位保留整数，个位保留余数
      let sum = num1[i] * num2[j] + array[i + j + 1];
      array[i + j] += 0 | sum / 10;
      array[i + j + 1] = sum % 10;
    }
    j = len2;
  }

  while (array[0] === 0) {
    array.shift();
  }

  return array.join('');
};