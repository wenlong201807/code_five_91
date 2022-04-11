/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 通过
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *  注意两个端点的情况
 */
var searchInsert = function (nums, target) {
  let head = 0;
  let tail = nums.length;
  let mid = 0;
  while (head < tail) {
    mid = (head + tail) >> 1;
    if (nums[mid] < target) head = mid + 1;
    else {
      tail = mid;
    }
  }
  return head;
};