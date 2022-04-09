/**
 * 通关 https://leetcode-cn.com/problems/median-of-two-sorted-arrays/submissions/
 * 详细题解
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/er-fen-tu-jie-dai-ma-jian-ji-by-chen-wei-c3u4/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  let m = nums1.length;
  let n = nums2.length;
  // 在0~m查找
  let left = 0;
  let right = m;
// median1 是第一个数组的最大值，median2 是第二个数组的最小值
  let median1 = 0;
  let median2 = 0;
  while (left <= right) {
    // nums1[0...i-1] nums2[0...j-1]
    // nums1[0...m-1] nums2[0...n-1]
    const i = left + Math.floor((right - left) / 2);
    const j =  Math.floor((m + n + 1) / 2) - i;
    const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    const minRight1 = i === m ? Infinity : nums1[i];
    const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    const minRight2 = j === n ? Infinity : nums2[j];
    if (maxLeft1 <= minRight2) {
      median1 = Math.max(maxLeft1, maxLeft2);
      median2 = Math.min(minRight1, minRight2);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }
  return (m + n) % 2 === 0 ? (median1 + median2) / 2 : median1;
};