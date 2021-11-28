/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 单调队列 滑动窗口
 * 
 * 滑动窗口
 * 1 创建一个数组，其中p[i] = A[0] + A[1] + ... + A[i] (如果A[i]没有负数，可以保证P[i+1]>P[i]),则本地转换为p[y]-p[x]>=k 且 y-x 最小的值
 * 2 使用双端队列保存滑动窗口 （js 可以直接使用数组），每次循环在队列尾添加本次循环的下表j,记为滑动窗口末尾值，为了保证p[j+1]>p[j],因此 while(queue.length)
 */
// 未通过
var shortestSubarray1 = function (nums, k) {
  let arr = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    arr[i + 1] = arr[i] + nums[i];
  }
  let queue = [], min = nums.length + 1;
  for (let j = 0; j < arr.length; j++) {
    // 上次的和 大于 本次的和，arr[j-1] > arr[j];不保留本次的j
    while (queue.length !== 0 && arr[queue[queue.length - 1]] >= arr[j]) {
      queue.pop();
    }
    // arr[j] > arr[滑动窗口的初始值]，取最小长度
    while (queue.length !== 0 && arr[j] - arr[queue[0]] >= k) {
      min = Math.min(j - queue[0], min);
      // 删除滑动窗口的初始值，然后重新push进当前的j
      // 如果说滑动窗口上此的结束值是一个初始值，当前j即是滑动窗口的结束值
      queue.shift();
    }
    queue.push(j);
  }

  return min < arr.length + 1 ? min : -1;
};

// 通过 https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k/submissions/
var shortestSubarray = function (A, K) {
  let P = new Array(A.length + 1).fill(0);
  for (let i = 0; i < A.length; i++){
    P[i + 1] = P[i] + A[i];
  }
  let queue = [], min = A.length + 1;
  for (let j = 0; j < P.length; j++){
    // 上次的和 大于 本次的和，P[j-1] > P[j]; 则不存取本次的j
    while (queue.length != 0 && P[queue[queue.length - 1]] >= P[j]) {
      queue.pop();
    }
    while (queue.length != 0 && P[j] - P[queue[0]] >= K) {
      // 当本次的P[j]>P[滑动窗口初始值],则取最小长度
      min = Math.min(j - queue[0], min);
      // 并删除滑动窗口初始值，而后重新push进当前j，则滑动窗口上次结束值为初始值，当前j为滑动窗口结束值
      queue.shift();
    }
    queue.push(j);
  }
  return min < A.length + 1 ? min : -1;
}