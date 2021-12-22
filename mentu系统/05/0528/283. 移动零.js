/**
 * 通过 https://leetcode-cn.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let len = nums.length
  let i = 0
  let zeroNums = 0
  while (i < len - zeroNums) {
    if (nums[i] == 0) {
      nums.push(nums.splice(i, 1))
      i = i - 1
      zeroNums = zeroNums + 1
    }
    i = i + 1
  }
  return nums
};

// 方法二
// 通过 https://leetcode-cn.com/problems/move-zeroes/submissions/
var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}