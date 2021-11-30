var randOne = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}


/**
 * 通过 https://leetcode-cn.com/problems/shuffle-an-array/submissions/
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;// 获取原数组
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {// 打乱数组
  const nums = this.nums.slice(0);
  let n = nums.length;
  // 记录产生结果的可能 有多种
  for (let i = 0; i < n; i++) {
    // 从i到n-1随机选一个
    const rand = randOne(i, n - 1);
    // 交换nums[i] nums[rand]
    [nums[i], nums[rand]] = [nums[rand], nums[i]];
  }
  return nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */