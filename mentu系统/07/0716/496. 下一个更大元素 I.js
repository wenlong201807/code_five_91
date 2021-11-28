/**
 * 通过 https://leetcode-cn.com/problems/next-greater-element-i/submissions/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map(), stack = [], ans = [];
  nums2.forEach(item => {
    while (stack.length && item > stack[stack.length - 1]) {
      map.set(stack.pop(), item);
    }
    stack.push(item)
  })

  stack.forEach(item => map.set(item, -1));
  nums1.forEach(item => ans.push(map.get(item)));

  return ans;
};