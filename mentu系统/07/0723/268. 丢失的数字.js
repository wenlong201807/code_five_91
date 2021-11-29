/**
 * @param {number[]} nums
 * @return {number}
 */
// 通过
var missingNumber1 = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i] ^ i
  }

  return result ^ nums.length
};


// 通过 https://leetcode-cn.com/problems/missing-number/submissions/
var missingNumber = function (nums) {
  let n = nums.length;
  let dis = (1 + n) * n / 2;
  for (let i = 0; i < n; i++) {
    dis = dis - nums[i];
  }

  return dis;
};