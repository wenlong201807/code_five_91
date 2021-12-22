/**
 * 通过 https://leetcode-cn.com/problems/increasing-subsequences/submissions/
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];
  let len = nums.length;
  const set = new Set();
  const dfs = (start, path) => {// 主要是做 去重
    if (path.length >= 2) {
      const str = path.toString();// 讲数组path转换成字符串
      if (!set.has(str)) {// 当set里面没有当前的path时
        res.push(path.slice());// 放进去一个拷贝的path
        set.add(str);// 存入set里面，记录一下
      }
    }
    // 枚举出当前所有肯恩工会出现的序列情况，从start一直到数组的末尾
    for (let i = start; i < len; i++) {
      const prev = path[path.length - 1];// 上一个选择，就是path数组里面的末尾元素
      const cur = nums[i];
      // 开始判断是否满足递增关系
      if (path.length === 0 || prev <= cur) {
        path.push(cur);// 当前的数字
        dfs(i + 1, path);// 往下递归
        path.pop();// 删除当前数字，选择新的数字
      }
    }
  }
  dfs(0, []);// 递归的入口，从下标0开始到数组的最后一位，将这些合适的数字，带有递增关系的序列加到path
  return res;
};