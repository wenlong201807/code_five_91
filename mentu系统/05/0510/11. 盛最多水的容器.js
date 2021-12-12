/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0
  let curArea = 0
  let i = 0
  let len = height.length
  let j = len - 1

  while (i < j) {
    if (height[i] <= height[j]) {
      curArea = (j - i) * height[i]
      i++
    } else {
      curArea = (j - i) * height[j]
      j--
    }
    maxArea = curArea > maxArea ? curArea : maxArea;
  }

  return maxArea
};

// 方法二
// 通过 https://leetcode-cn.com/problems/container-with-most-water/submissions/
var maxArea = function (height) {
  let res = 0;
  let i = 0, j = height.length - 1;
  while (i < j) {
    res = Math.max(res, Math.min(height[i], height[j]) * (j - i))
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return res;
}