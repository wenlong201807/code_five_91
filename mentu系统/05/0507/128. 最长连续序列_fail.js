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

// 有多种方法
// 详细解答版 https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/fang-fa-cong-yi-dao-nan-bing-cha-ji-fang-fa-bu-hui/

/*
 查找 Set 中的元素的时间复杂度是 O(1)，JS 的 Set 能给数组去掉重复元素
 将数组元素存入 set 中，遍历数组 nums
 如果 当前项 - 1 存在于 set ，说明当前项不是连续序列的起点，跳过，继续遍历
 当前项没有“左邻居”，它就是连续序列的起点
 不断在 set 中查看 cur + 1 是否存在，存在，则 count +1
 cur 不再有 “右邻居” 了，就算出了一段连续序列的长度
*/
var longestConsecutive = (nums) => {
  const set = new Set(nums); // set存放数组的全部数字
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      // nums[i]没有左邻居，是序列的起点
      let cur = nums[i];
      let count = 1;
      while (set.has(cur + 1)) {
        // cur有右邻居cur+1
        cur++; // 更新cur
        count++;
      }
      max = Math.max(max, count); // cur不再有右邻居，检查count是否最大
    }
  }
  return max;
};

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/fang-fa-cong-yi-dao-nan-bing-cha-ji-fang-fa-bu-hui/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
