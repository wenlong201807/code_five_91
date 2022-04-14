/**
 * 通关 https://leetcode-cn.com/problems/jump-game-ii/submissions/
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
  let curI = 0;
  let netI = 0;
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    netI = Math.max(nums[i] + i, netI);
    if (i === curI) {
      curI = netI;
      steps++;
    }
  }
  return steps;
};

// 贪心系列
// https://leetcode-cn.com/problems/jump-game-ii/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-tan-x-uqd0/