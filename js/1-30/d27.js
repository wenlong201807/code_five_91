/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 解法一
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

// 解法二
var searchInsert = function (nums, target) {
  var i = 0;
  while (i <= nums.length) {
    if (nums[i] >= target) {
      return i;
    }
    i++;
  }
  return nums.length;
};
