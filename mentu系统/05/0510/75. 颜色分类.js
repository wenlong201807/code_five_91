/**
 * 通过 https://leetcode-cn.com/problems/sort-colors/submissions/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const swap = (list, p1, p2) => [list[p1], list[p2]] = [list[p2], list[p1]];
  let red = 0, blue = nums.length - 1, p = 0;
  while (p <= blue) {
    switch (nums[p]) {
      case 0:
        swap(nums, red++, p);
        p++;
        break;
      case 1:
        p++;
        break;
      case 2:
        swap(nums, blue--, p);
        break;
      default:
        break;
    }
  }
};