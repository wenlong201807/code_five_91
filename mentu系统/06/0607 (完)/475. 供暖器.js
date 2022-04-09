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
    if (nums[mid] >= x) { // 注意等于号的意义
      tail = mid
    }else {
      head = mid + 1
    };
  }
  return head;
}
var findRadius = function (houses, heaters) {
  heaters.sort((a, b) => a - b); // 所有加热器变换位置，对加热距离没有影响
  let ans = 0;

  for (const x of houses) {
    let j = binarySearch(heaters, x);// 每一个房子于所有加热器的最小距离
    let l = Math.abs(heaters[j] - x); // 当前房子与房子左侧最近的加热器的距离
    let r = Math.abs(j ? x - heaters[j - 1] : l + 1); // 当前房子与房子右侧最近的加热器的距离
    ans = Math.max(ans, Math.min(l, r))
  }
  return ans;
};

const houses = [1,2,3,4], heaters = [1,4]
findRadius(houses, heaters);