/**
 * 参考学习 https://leetcode-cn.com/problems/h-index/solution/javascript-cha-ru-pai-xu-fu-zhu-shu-zu-b-sa4b/
 * 通过 01：45：00 https://leetcode-cn.com/problems/maximum-gap/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  let cnt = new Array(65536).fill(0);// 记录下标和
  let temp = new Array(nums.length);// 临时数组
  for (let i = 0; i < nums.length; i++) {
    cnt[nums[i] & 0xffff] += 1;
  }
  // 每一个小标的前缀和
  for (let i = 1; i < 65536; i++) {
    cnt[i] += cnt[i - 1];
  }
  // 把数字按照记录的下标放到临时数组
  for (let i = nums.length - 1; i >= 0; i--) {
    temp[--cnt[nums[i] & 0xffff]] = nums[i];
  }
  //重置
  cnt = new Array(65536).fill(0);
  // 下面是对2的16-32次方范围内的，做依次基数排序
  for (let i = 0; i < nums.length; i++) {
    cnt[(temp[i] & 0xffff0000) >> 16] += 1;
  }
  for (let i = 1; i < 65536; i++) {
    cnt[i] += cnt[i - 1];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[--cnt[(temp[i] & 0xffff0000) >> 16]] = temp[i];
  }

  let ans = 0;
  for (let i = 1; i < nums.length; i++) {
    ans = Math.max(ans, nums[i] - nums[i - 1]);
  }
  return ans;
};