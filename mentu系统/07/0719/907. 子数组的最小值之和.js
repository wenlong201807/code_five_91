/**
 * 通过 https://leetcode-cn.com/problems/sum-of-subarray-minimums/submissions/
 * @param {number[]} arr
 * @return {number}
 * 将第i个入队列，求出前面区间的跨度，就是第i个元素贡献的和值，再加上前面sums(前面n个和值)
 */
var sumSubarrayMins = function (arr) {
  let stack = [];
  let mod_num = 1e9 + 7;
  let ans = 0;
  let sum = new Array(arr.length + 1);
  sum[0] = 0;
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] <= arr[stack[stack.length - 1]]) stack.pop();
    let ind = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
    sum[stack.length] = (sum[stack.length - 1] + arr[i] * (i - ind)) % mod_num;
    ans += sum[stack.length];
    ans %= mod_num;
  }
  return ans;
};