/*
1 给定的不是具体的数组，而是长度限制 k, 和目标值 target -- 等同于 candidates 是无重复，1-9 的正整数数组
2 所以可以看做是 39. 组合总和 的特殊情况，只是判定条件有出入
*/

var combinationSum3 = function (k, n) {
  const ret = [];

  const dfs = (start, arr, sum) => {
    if (arr.length === k && sum === n) {
      ret.push(arr);
      return;
    }
    if (arr.length > k || sum > n) {
      return;
    }

    for (let i = start + 1; i < 10; i++) {
      dfs(i, [...arr, i], sum + i);
    }
  };

  dfs(0, [], 0);
  
  return ret
};
