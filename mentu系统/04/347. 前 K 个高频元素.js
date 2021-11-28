/**
 * 题目 https://leetcode-cn.com/problems/top-k-frequent-elements/
 * 通关 https://leetcode-cn.com/problems/top-k-frequent-elements/submissions/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map()
  let arr = [...new Set(nums)]

  nums.map((num) => {
    if (map.has(num)) 
      map.set(num, map.get(num) + 1)
    else 
      map.set(num, 1)
  })

  return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
};
