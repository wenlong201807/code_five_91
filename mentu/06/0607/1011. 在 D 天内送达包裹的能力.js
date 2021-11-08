/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

const check = (nums, x) => {
  let cnt = 1, sum = 0;
  for (const y of nums) {
    if (sum + y > x) {
      cnt += 1;
      sum = y;
    } else {
      sum += y;
    }
  }
  return cnt;
}
var shipWithinDays = function (weights, days) {
  let l = 0, r = 0, mid;
  for (const x of weights) {
    r += x;
    l = Math.max(l, x);
  }
  while (l < r) {
    mid = (l + r) >> 1;
    if (check(weights, mid) <= days) r = mid;
    else l = mid + 1;
  }
  return l;
};