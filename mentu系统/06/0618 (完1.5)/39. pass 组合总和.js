/**
 * 通关 https://leetcode-cn.com/problems/combination-sum/submissions/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * dfs + 回溯
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  const dfs = (target, combine, idx) => {
    if (idx == candidates.length) {// 遍历到头了，只能结束
      return;
    }

    if (target === 0) {// 刚好匹配上了，那么这个组合存入结果中，这次查询结束
      ans.push(combine);
      return;
    }

    dfs(target, combine, idx + 1);// 直接跳过

    // 选择当前的数据
    if (target - candidates[idx] >= 0) {
      // 差多少，补多少
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  }

  dfs(target, [], 0);
  return ans;
};