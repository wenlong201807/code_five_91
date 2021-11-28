/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
// 超时
var longestSubarray = function (nums, limit) {
  const queueMax = [];
  const queueMin = [];
  let left = 0, right = 0;
  const n = nums.length;
  let ret = 0;
  while (right < n) {
    while (queueMax.length && queueMax[queueMax.length - 1] < nums[right]) {
      queueMax.pop();
    }
    while (queueMin.length && queueMin[queueMin.length - 1] > nums[right]) {
      queueMin.pop();
    }
    queueMax.push(nums[right]);
    queueMin.push(nums[right]);
    while (queueMax.length && queueMin.length && queueMax[0] - queueMin[0] > limit) {
      if (nums[left] === queueMin[0]) {
        queueMin.shift();
      }
      if (nums[left] === queueMax[0]) {
        queueMax.shift();
      }
      left++;
    }
    ret = Math.max(ret, right - left + 1);
    right++;
  }
  return ret;
};

// 大神
var longestSubarray = function (nums, limit) {
  const N = nums.length

  let ans = 0
  // 找区间 [left, right] 中的最小值、最大值
  let left = 0, right = left
  // 单调增队列， minQueue[minStart] 为区间 [left, right] 中的最小值
  // NOTICE:
  // minQueue[0...minStart-1] 为待删除的元素。
  // 如果通过 minQueue.shift() 实时删除，计算量很大。
  // 而是延迟删除，延迟到 minQueue 中只剩下待删除元素时再批量删除
  let minQueue = [], minStart = 0
  // 单调减队列， maxQueue[maxStart] 为区间 [left, right] 中的最大值
  let maxQueue = [], maxStart = 0
  for (; right < N; ++right) {
    const rightNum = nums[right]

    // NOTICE:
    // 为了求子数组的最大长度，设计为单调宽松增。
    // 即相等时，保留单调增队列中原有的末尾元素，从而让最小值尽量靠左
    while (minQueue.length
      && minQueue[minQueue.length - 1] > rightNum
    ) {
      minQueue.pop()
      // NOTICE:
      // 如果 minQueue 末尾元素的索引小于 minStart ，说明 minQueue 中目前剩余的元素全都是待删除的元素，
      // 此时可以批量删除
      if (minQueue.length - 1 < minStart) {
        minQueue.length = 0
        minStart = 0 // 因为 break 后肯定要执行1次 push() ，所以 minStart = 0
        break
      }
    }
    minQueue.push(rightNum)

    while (maxQueue.length
      && maxQueue[maxQueue.length - 1] < rightNum
    ) {
      maxQueue.pop()
      if (maxQueue.length - 1 < maxStart) {
        maxQueue.length = 0
        maxStart = 0
        break
      }
    }
    maxQueue.push(rightNum)

    // 为了让最大绝对差小于等于 limit，固定 right 不动，移动 left
    while (left <= right && maxQueue[maxStart] - minQueue[minStart] > limit) {
      left++
      if (minQueue[minStart] === nums[left - 1]) {
        // NOTICE:
        // 用 minStart++ 代替 minQueue.shift()
        // 因为 minQueue.shift() 需要重新计算 JS 数组中各个元素的索引，在 case 59 中需要大量计算，导致超时
        minStart++
      }
      if (maxQueue[maxStart] === nums[left - 1]) {
        maxStart++
      }
    }

    ans = Math.max(ans, right - left + 1)
    // console.log(minQueue, minStart, maxQueue, maxStart, left, right, '\n')
  }

  return ans
};

// 作者：kerry95
// 链接：https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solution/ji-bai-99-hua-dong-chuang-kou-dan-diao-d-n3bx/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。