/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

const check = (nums, x) => {
  let cnt = 1; // 总共有多少组，能进来至少有一组
  let sum = 0; // 每一组的总重量
  for (const y of nums) {
    if (sum + y > x) {// x 为模拟每一组的最小总重量值
      cnt += 1;
      sum = y;
    } else {
      sum += y;
    }
  }
  return cnt; // 需要分割成多少组，即实际需要多少天
}


var shipWithinDays = function (weights, days) {
  let l = 0, r = 0, mid;
  for (const x of weights) {
    r += x;
    l = Math.max(l, x);
  }
  // 每一天的包裹总重量，一定是大于单个包裹的重量，小于左右包裹的总重量的，
  // 并以此作为二分查找的切入点
  while (l < r) {
    mid = (l + r) >> 1;
    if (check(weights, mid) <= days) r = mid;
    else l = mid + 1;
  }
  return l; // 返回最小重量值
};

const weights = [1,2,3,4,5,6,7,8,9,10], days = 5
shipWithinDays(weights, days);