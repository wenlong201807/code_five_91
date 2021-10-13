/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
var numberOfRounds = function (startTime, finishTime) {
  //将时间拆成数组
  let start = startTime.split(':').map(Number);
  let finish = finishTime.split(':').map(Number);
  //时间转换成分钟
  let startMM = start[0] * 60 + start[1];
  let finishMM = finish[0] * 60 + finish[1];
  //结束时间小于开始时间，通宵加一天60*24
  if (startMM > finishMM) finishMM += 1440;

  return Math.max(0, Math.floor(finishMM / 15) - Math.ceil(startMM / 15));
};
// 作者：meng-xin-xue-suan-fa-b
// 链接：https://leetcode-cn.com/problems/the-number-of-full-rounds-you-have-played/solution/ni-wan-cheng-de-wan-zheng-dui-ju-shu-by-k43p1/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
