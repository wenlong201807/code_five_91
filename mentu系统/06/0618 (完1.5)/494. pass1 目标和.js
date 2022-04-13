/**
 * 通关 https://leetcode-cn.com/problems/target-sum/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;
  const dfs = (nums, target, index, sum) => {
    if (index === nums.length) {
      if (sum === target) {
        count++;
      }
    } else {
      dfs(nums, target, index + 1, sum - nums[index]);
      dfs(nums, target, index + 1, sum + nums[index]);
    }
  }

  dfs(nums, target, 0, 0);

  return count;
};