/**
 * @param {number[]} nums
 * @return {number}
 */
// 通过
var singleNumber1 = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]
  }

  return result
};


// 通过 https://leetcode-cn.com/problems/single-number/submissions/
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === nums[i + 1]) i++;
    else return nums[i];
  }
};

