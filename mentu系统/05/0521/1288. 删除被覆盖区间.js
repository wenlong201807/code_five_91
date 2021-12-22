/** 通过 https://leetcode-cn.com/problems/remove-covered-intervals/submissions/
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  // [a,b] 按照a升序排序，b降序排序
  intervals.sort((a, b) => {
    if (a[0] == b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  })
  let i = 0, len = intervals.length, cnt = 0;
  while (i < len) {
    let [m, n] = intervals[i], j = i + 1;
    while (j < len && m <= intervals[j][0] && n >= intervals[j][1]) {
      cnt++;
      j++;
    }
    i = j;
  }
  return len - cnt;
};