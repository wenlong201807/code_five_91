/**
 * @param {number} x
 * @return {number}
 */
var mySqrt1 = function (x) {
  if (x == 0) return 0

  let left = 1
  let right = Math.floor(x / 2)

  while (left < right) {
    let mid = Math.ceil((left + right) / 2)
    if (mid > x / mid) {
      right = mid - 1
    } else {
      left = mid
    }
  }

  return Math.floor(left)
};

// 通关 https://leetcode-cn.com/problems/sqrtx/submissions/
const mySqrt2 = (x) => {
  let head = 0;
  let tail = x;
  let mid = 0;
  tail += 1;
  // 1/(2**100) 几乎等于0
  for (let i = 0; i < 100; i++) {
    // 避免计算超界
    mid = head + ((tail - head) / 2.0);
    if (mid * mid <= x) head = mid;
    else tail = mid;
  }

  return Math.floor(head)
};

// 解法3
const mySqrt = (x) => {
  let target = 1;
  while (target) {
    if (target * target > x)
      return target - 1;
    else target += 1;
  }
};