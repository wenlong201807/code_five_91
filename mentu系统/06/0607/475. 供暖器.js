/**
 * 通关 https://leetcode-cn.com/problems/heaters/submissions/
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const binarySearch = (nums, x) => {
  let head = 0;
  let tail = nums.length - 1;
  let mid = 0;
  while (head < tail) {
    mid = (head + tail) >> 1;
    if (nums[mid] >= x) tail = mid;
    else head = mid + 1;
  }
  return head;
}
var findRadius = function (houses, heaters) {
  heaters.sort((a, b) => a - b);
  let ans = 0;
  for (const x of houses) {
    let j = binarySearch(heaters, x);
    let a = Math.abs(heaters[j] - x);
    let b = Math.abs(j ? x - heaters[j - 1] : a + 1);
    ans = Math.max(ans, Math.min(a, b))
  }
  return ans;
};