/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function (nums) {
  if (nums.length == 1) {
    return nums[0]
  }
  let len = nums.length
  let major = Math.floor(len / 2)
  let i = 0
  let mapObj = new Map()
  while (i < len) {
    if (mapObj.has(nums[i])) {
      mapObj.set(nums[i], mapObj.get(nums[i]) + 1)
      if (major < mapObj.get(nums[i])) {
        return nums[i]
      }
    } else {
      mapObj.set(nums[i], 1)
    }
    i = i + 1
  }
};

// 通过 https://leetcode-cn.com/problems/majority-element/submissions/
var majorityElement = function (nums) {
  let stack = [];
  for (let n of nums) {
    // let m = stack.length;
    // if (stack[m - 1] === n || !m) {
    if (!stack.length || n === stack[stack.length - 1]) {
      stack.push(n)
    } else {
      stack.pop();
    }
  }
  return stack[0];
}