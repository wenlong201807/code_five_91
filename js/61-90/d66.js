var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => {
    return a[1] - b[1]
  })

  let count = 1
  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i]
    if (interval[0] >= end) {
      end = interval[1]
      count += 1
    }
  }

  return intervals.length - count
};

var eraseOverlapIntervals2 = function (intervals) {
  // 按照左边界升序排列
  intervals.sort((a, b) => a[0] - b[0])
  let count = 1
  let end = intervals[intervals.length - 1][0]
  // 倒序遍历，对单个区间来说，左边界越大越好，因为给前面区间的空间越大
  for (let i = intervals.length - 2; i >= 0; i--) {
    if (intervals[i][1] <= end) {
      count++
      end = intervals[i][0]
    }
  }
  // count 记录的是最大非重复区间的个数
  return intervals.length - count
}

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/non-overlapping-intervals/solution/435-wu-zhong-die-qu-jian-tan-xin-jing-di-qze0/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。