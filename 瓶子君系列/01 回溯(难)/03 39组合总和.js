/*
1 candidates 是无重复，正整数数组
2 可以重复取值，但是由于和排列无关，不能倒退取，所以需要维护一个初始的下标值;与 [组合总和IV] 形成对比
*/
// 方法一
var combinationSum1 = function (candidates, target) {
  const ret = [];

  const dfs = (start, arr, sum) => {
    if (sum === target) {
      ret.push(arr);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      // 因为允许重复取，所以每一次都是从 start 这个节点开始取的
      dfs(i, [...arr, candidates[i]], sum + candidates[i]);
    }
  };

  dfs(0, [], 0);
  return ret;
};

// 方法二
var combinationSum2 = function (candidates, target) {
  const ans = [];
  const dfs = (target, combine, idx) => {
    if (idx == candidates.length) {
      return;
    }

    if (target === 0) {
      ans.push(combine);
      return;
    }

    dfs(target, combine, idx + 1);// 直接跳过

    // 选择当前的数据
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  }

  dfs(target, [], 0);
  return ans;
};