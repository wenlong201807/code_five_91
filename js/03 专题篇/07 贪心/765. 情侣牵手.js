// https://leetcode-cn.com/problems/couples-holding-hands/

// 最好题解 https://leetcode-cn.com/problems/couples-holding-hands/solution/liang-chong-100-de-jie-fa-bing-cha-ji-ta-26a6/

// 大神笔记 https://github.com/SharingSource/LogicStack-LeetCode/wiki
var minSwapsCouples = function (row) {
  if (row.length <= 2) return 0;
  var len = row.length;
  var map = new Array(len);
  for (var index in row) map[row[index]] = index;
  var next = (count = 0);
  for (var i = 0; i <= len - 2; i += 2) {
    next = row[i] + (row[i] % 2 === 0 ? 1 : -1);
    if (row[i + 1] != next) {
      var temp = row[i + 1];
      row[i + 1] = row[map[next]];
      row[map[next]] = temp;
      temp = map[row[map[next]]];
      map[row[map[next]]] = map[row[i + 1]];
      map[row[i + 1]] = temp;
      count++;
    }
  }
  return count;
};
