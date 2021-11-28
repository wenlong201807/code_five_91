/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 已通过
var maxSlidingWindow1 = function (nums, k) {
  let len = nums.length
  if (len === 0) {
    return []
  }

  let queue = []
  let result = []

  for (let i = 0; i < len; i++) {

    if (i >= k && nums[i - k] == queue[0]) {
      queue.splice(0, 1)
    }
    while (i > 0 && (queue.length > 0) && nums[i] > queue[queue.length - 1]) {
      queue.splice(queue.length - 1, 1)
    }

    queue.push(nums[i])

    if (i >= k - 1) {
      result.push(queue[0])
    }
  }

  return result
};

// 通过 https://leetcode-cn.com/problems/sliding-window-maximum/submissions/
const maxSlidingWindow = (nums, k) => {
  const n = nums.length;
  const q = [];// 滑动窗口
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
  }
  const ans = [nums[q[0]]];
  for (let i = k; i < n; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop()
    }
    q.push(i)
    while (q[0] <= i - k) {
      q.shift()
    }
    ans.push(nums[q[0]])
  }
  return ans;
}