/**
 * 通关 https://leetcode-cn.com/problems/minimum-limit-of-balls-in-a-bag/submissions/
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let l = 0, r = 0;
  // 二分查找的上边界r
  for (let n of nums) {
    r = Math.max(n, r)
  }
  // 注意边界条件
  while (l + 1 < r) {
    // js语言特性：向下取整
    let mid = Math.floor(l + (r - l) / 2), temp = 0;
    for (let n of nums) {
      temp += Math.floor((n - 1) / mid); // 更新中间数
    }
    // 当前没有用完操作次数，说明还可以进一步降低最终 的最小取值，向下调整上边界
    if (temp <= maxOperations) {
      r = mid;
    } else {
      // 当前用完了操作次数，说明当前最小取值无法满足条件，向上调整下边界
      l = mid;
    }
  }
  // 注意最终返回上边界的值
  return r;
};