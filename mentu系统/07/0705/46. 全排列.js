/**
 * 通关 https://leetcode-cn.com/problems/permutations/submissions/
 * @param {number[]} nums
 * @return {number[][]}
 * 遍历，
 * 去重->回溯
 */
var permute = function (nums) {
  function dfs (nums, track) {
    if (track.length === nums.length) {
      res.push(track)
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (track.includes(nums[i])) {
        continue;
      }
      track.push(nums[i]);
      const newTrack = [...track];
      dfs(nums, newTrack);
      track.pop() // 去掉重复的，从后面删去
    }
  }
  const res = [];
  dfs(nums, []);
  return res;
};