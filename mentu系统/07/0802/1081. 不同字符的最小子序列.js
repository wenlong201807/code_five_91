/**
 * 通过 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/submissions/
 * @param {string} s
 * @return {string}
 * 单调栈
 */
var smallestSubsequence = function (s) {
  let arr = [];
  for (let i = 0; i <= s.length - 1; i++) {
    let str = s[i];
    if (arr.includes(str)) continue;
    while (arr.length > 0 && arr[arr.length - 1] > str && s.indexOf(arr[arr.length - 1], i) > i) {
      arr.pop();
    }
    arr.push(str);
  }
  return arr.join('');
};