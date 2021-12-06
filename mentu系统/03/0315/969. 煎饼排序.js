/**
 * 通过 https://leetcode-cn.com/problems/pancake-sorting/submissions/
 * @param {number[]} arr
 * @return {number[]}
 * 思路
 * 煎饼排序简单点来说：每一次只能反转数组中的第一个元素到第k个元素的子数组
 * 然后没完成一次反转后，就将k值记录下来
 * 知道这个数组变成有序递增的，就处处记录下来的所有k的值。
 * 
 * 首先找到数组中的最大值，先将其反转至数组头部，再将其反转到该元素排序后的位置；
 * 然后找数组中的次大值，重复上述操作，知道数组排序完毕。
 */
// 找到最大数的下标
function getMaxIndex (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[max]) {
      max = i;
    }
  }
  return max;
}

// 反转前k个元素
var reverse = function (arr, k) {
  if (k < 1) {
    return;
  }
  let i = 0; let j = k;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}
var pancakeSort = function (arr) {
  let ans = [], max;
  while (arr.length > 1) {
    max = getMaxIndex(arr);
    max > 0 && (ans.push(max + 1));
    reverse(arr, max);
    reverse(arr, arr.length - 1);
    ans.push(arr.length);
    arr.pop();
  }
  return ans;
};