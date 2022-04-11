/**
 * 通关 https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero/submissions/
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */


const binarysearch = (nums, x) => {
  let head = 0;
  let tail = nums.length - 1;
  let mid = 0;
  while (head <= tail) {
    mid = (head + tail) >> 1;
    if (nums[mid] === x) {
      return mid;
    }

    if (nums[mid] < x) {
      head = mid + 1;
    } else {
      tail = mid - 1;
    }
  }

  return -1;
}

var minOperations = function (nums, x) {
  const len = nums.length;
  let sumL = new Array(len + 1);
  let sumR = new Array(len + 1);
  sumL[0] = sumR[0] = 0;
  // 初始化左边的区间和
  for (let i = 0; i < len; i++) {
    sumL[i + 1] = sumL[i] + nums[i];
  }
  // 初始化右边的区间和
  for (let i = len - 1; i >= 0; --i) {
    sumR[len - i] = nums[i] + sumR[len - i - 1];
  }

  let ans = -1;
  for (let i = 0; i < len; i++) {
    let j = binarysearch(sumR, x - sumL[i]);// 查找剩余数量
    if (j === -1) continue;
    if (i + j > len) continue;
    if (ans === -1 || ans > i + j) ans = i + j;
  }

  return ans;
};
