/**
 * 通过 https://leetcode-cn.com/problems/maximum-score-from-removing-stones/submissions/
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 * 思路
 * 进行abc的排序，保证小，中，大；干掉第一堆里面，第三堆比第二堆多的数量；
 * 判断第一堆里面是否为0，否 就是第二堆和第三堆的数量是一样的；
 * 分别销掉第一堆的二分之一个数量，第二堆和第三堆都要减去相等的二分之一的a；
 * 接着不断的减去第二堆和第三堆的数量
 */
var maximumScore = function (a, b, c) {
  if (a > b) [a, b] = [b, a];
  if (a > c) [a, c] = [c, a];
  if (b > c) [b, c] = [c, b];
  var ans = 0;
  // step1
  var cnt1 = Math.min(c - b, a);
  a -= cnt1;
  c -= cnt1;
  ans += cnt1;
  // step2
  if (a !== 0) {
    if (a % 2 == 1) a -= 1;
    b -= a / 2 | 0;
    c -= a / 2 | 0;
    ans += a;
  }
  // step3
  ans += b;
  return ans;
};