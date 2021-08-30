// https://leetcode-cn.com/problems/two-sum/
// const nums = [2,7,11,15], target = 9;
// const nums = [3, 2, 4], target = 6;
// const nums = [0,4,3,0], target = 0;
const nums = [-1,-2,-3,-4,-5], target = -8;
// 已经排序的
var twoSum1 = (nums, target) => {
  const newArr = nums.sort((a, b) => a - b);
  let left = 0;
  let right = newArr.length - 1;
  while(left <= right) {
    console.log(left , right)
    if (newArr[left] + newArr[right] === target) {
      return [left, right]
    }
    if (newArr[left] + newArr[right] > target) {
      right--;
    }
    if (newArr[left] + newArr[right] < target) {
      left++;
    }
  }
}
// console.log(twoSum1(nums, target))

// 未排序的
var twoSum = (nums, target) => {
  const map = new Map();
  const len = nums.length - 1;
  for(let i = 0; i <= len; i++) {
    const otherNum = target - nums[i];
    console.log(i, otherNum,map)
    if (map.has(otherNum)) {
      return [i, map.get(otherNum)]
    } else {
      map.set(nums[i], i)
    }
  }
}
console.log(twoSum(nums, target))