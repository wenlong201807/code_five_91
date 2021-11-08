/**
 * 通关 https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (nums[0] === target || nums[nums.length - 1] === target) return true;
  let l = 0, r = nums.length - 1, mid;
  while (l < nums.length && nums[l] === nums[0]) ++l;
  while (r >= 0 && nums[r] === nums[0]) --r;
  let head = l, tail = r;
  while (l <= r) {
    mid = (l + r) >> 1;
    if (nums[mid] === target) return true;
    if (nums[mid] <= nums[tail]) {
      if (target > nums[mid] && target <= nums[tail]) l = mid + 1;
      else r = mid - 1;
    } else {
      if (target < nums[mid] && target >= nums[head]) r = mid - 1;
      else l = mid + 1;
    }
  }

  return false;
};