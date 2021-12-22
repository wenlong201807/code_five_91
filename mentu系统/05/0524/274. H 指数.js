/**
 * 通过 https://leetcode-cn.com/problems/h-index/submissions/
 * 开始时间 02：05：51
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // 给的指数数组，按着从小到大进行排序
  citations = citations.sort((a, b) => a - b);
  // 定义H指数是合法的1
  let h = 1, n = citations.length;
  // 当前倒数第N为的论文的引用次数 >= h ，说明H指数是合法的，h往上加；坐标的合法性判断
  while (h <= n && citations[n - h] >= h) ++h;
  // 非法的H指数
  h -= 1;
  return h;
};