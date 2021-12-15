/**
 * 通过 https://leetcode-cn.com/problems/merge-intervals/submissions/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) {
    return [];
  }
  // 创建一个合并之后的数组
  let res = [];
  // 对数组进行升序排序
  intervals.sort((a, b) => a[0] - b[0]);
  // 把结果数组放到第一个数组里面
  res.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    // 如果当前区间的左端点 大于 结果数组的最后一个元素的右端点
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i]);
    } else {// 出现交集
      // 当前区间的右端点大于合并之后的最后一个元素右端点
      if (intervals[i][1] > res[res.length - 1][1]) {
        // 更新右端点的值
        res[res.length - 1][1] = intervals[i][1];
      }
    }
  }
  return res;
};