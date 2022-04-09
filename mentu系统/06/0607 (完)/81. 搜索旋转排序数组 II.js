/**
 * 通关 https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (nums[0] === target || nums[nums.length - 1] === target) return true;
  let l = 0,
    r = nums.length - 1,
    mid;
  while (l < nums.length && nums[l] === nums[0]) ++l;
  while (r >= 0 && nums[r] === nums[0]) --r;
  let head = l,
    tail = r;
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

// 包含旋转数组1，2，3
// 详解 https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/solution/cong-ji-ben-de-er-fen-fa-shuo-qi-ru-he-a-epun/

const search = function (nums, target) {
  if (!nums.length) return -1;
  let left = 0,
    right = nums.length - 1,
    mid;
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

// 作者：shaotianyu-3
// 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/solution/cong-ji-ben-de-er-fen-fa-shuo-qi-ru-he-a-epun/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
