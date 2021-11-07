/**
 * 通关 https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binarysearch = (nums, x) => {
  let head = 0;
  let tail = nums.length - 1;
  let mid = 0;
  while (tail - head > 3) {
    mid = (head + tail) >> 1;
    if (nums[mid] >= x) {
      tail = mid + 1;
    } else {
      head = mid + 1;
    }
  }

  for (let i = head; i <= tail; i++) {
    if (nums[i] >= x) return i;
  }
  return nums.length;
}
var searchRange = function (nums, target) {
  let ret = new Array(2); // 结果数组雏形
  ret[0] = binarysearch(nums,target);
  if (ret[0] === nums.length || nums[ret[0]] !== target) {
    ret[0] = ret[1] = -1; // 失败的结果
    return ret;
  }

  ret[1] = binarysearch(nums, target + 1) - 1;// 最后一个位置

  return ret;
};