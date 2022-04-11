/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum1  = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (Array.from(new Set(map.keys())).includes(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }

  return [-1, -1]
};

const twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++){
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i],i)
    }
  }

  return [-1, -1]
}