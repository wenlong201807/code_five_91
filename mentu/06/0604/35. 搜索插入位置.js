/**
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