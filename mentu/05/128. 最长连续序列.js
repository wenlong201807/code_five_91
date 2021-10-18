/**
 * 通关 https://leetcode-cn.com/problems/longest-consecutive-sequence/submissions/
 * @param {number[]} nums
 * @return {number}
 */
// 思路：数字必须是连起来的，间隔必须是1，最长连起来的数字有多长？把这个长度返回。
// 1. 先从数组里面取出一个树，n 判断n-1是否存在，如果存在，接着判断n-2，直到n-x 不存在，这时候，就到了数组的最前面，这个时候
// 从x 到n 这个区间，就是前面最长的数字长度；
// 接着判断n+1 是否存在吗？ 如果存在，接着判断n+2 是否存在吗？如果n+2存在，接着判断n+ m 是否存在？如果不存在
// 证明走到了数组的最后一位，此时，从 n 到m 这个区间就是后面部分的最长数字长度。
// 题目要求时间复杂度为n
var longestConsecutive = function (nums) {
  let num_set = new Set();
  for (num of nums) {
    num_set.add(num);
  }

  let longestStreak = 0; // 初始化为0，找到一个数字长度，
  for (num of nums) {
    if (!num_set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1; // 现有的长度
      while (num_set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      // 求的当前数的序列长度
      longestStreak = Math.max(longestStreak, currentStreak); // 找到的数字长度，和现在的数字长度，两者取较大的值
    }
  }

  return longestStreak;
};