/**
 * 通过 https://leetcode-cn.com/problems/sub-sort-lcci/submissions/
 * 结束 00：38：38
 * @param {number[]} array
 * @return {number[]}
 * 寻找逆序对
 * 正反两次遍历
 */
var subSort = function (array) {
  let r = -1, l = -1;
  // 正向遍历记录最右区间值
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
      max = array[i];
    } else {
      r = i;
    }
  }
  // 从右往左找，找到最左边的区间值
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] <= min) {
      min = array[i];
    } else {
      l = i;
    }
  }

  return [l, r];
};