/**
 * 通关 https://leetcode-cn.com/problems/find-k-closest-elements/submissions/
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let low = 0, high = arr.length - 1;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    x - arr[mid] > arr[mid + k] - x ? low = mid + 1 : high = mid;
  }
  return arr.slice(low, low + k);
};