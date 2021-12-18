/**
 * 通过 https://leetcode-cn.com/problems/minimum-deletions-to-make-character-frequencies-unique/submissions/
 * 01：30：27
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let charArr = new Array(26).fill(0);
  let arr = s.split('');
  arr.forEach((i) => charArr[i.charCodeAt() - 97]++);
  let resArr = charArr.filter((i) => i > 0).sort((a, b) => b - a);// 两种皆可
  // let resArr = charArr.filter((i) => i >= 0).sort((a, b) => b - a);
  let count = 0;
  for (let i = 1; i < resArr.length; i++) {
    while (resArr[i] >= resArr[i - 1] && resArr[i] > 0) {
      resArr[i]--;
      count++;
    }
  }
  return count;
};