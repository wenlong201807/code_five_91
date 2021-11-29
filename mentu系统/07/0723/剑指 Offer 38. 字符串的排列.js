/**
 * 通过 https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/submissions/
 * @param {string} s
 * @return {string[]}
 * 循环去遍历每一个字符，把该当前字符作为接下来结果中的字符串的首字符
 * 然后递归去找到剩余的字符的排列情况，在惊醒拼接
 */
var permutation = function (s) {
  let set = new Set();// set集合做去重
  if (s.length === 1) {
    return [s];
  }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let ss = s.slice(0, i) + s.slice(i + 1, s.length);// 拼接其他字符
    // 递归去寻找其他字符排列的所有情况
    let l = permutation(ss);
    // 将遍历的字符char拼接到剩余字符全排列的头部 并村出到set集合
    for (let j = 0; j < l.length; j++) {
      set.add(char + l[j]);
    }
  }
  // 将set集合结构成数组
  return [...set];
};