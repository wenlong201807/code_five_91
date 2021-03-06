/*
1 candidates 是有无重复，正整数数组
2 数组中的每一个值只能取一次；不可以重复取值，但是对于重复的值是可以取的，即 [1,1,2,3] -> 可以取 [1,1,2],[1,3] -> 4
3 为了不取到重复的值，就得跳过相同值，这个时候需要对数组排序
4 在每一层进行枚举的时候，循环中出现重复值的时候，剪掉这部分的枚举，因为肯定有相同的一部分
5 由于不可以重复取，所以 dfs 第一个入参的下标是要 +1 的，表示不可以重复取上一次哪一个值

作者：厨猿加加
链接：https://juejin.cn/post/7010321663912837151
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const ret = [];

  const dfs = (start, arr, sum) => {
    if (sum === target) {
      ret.push(arr);
      return;
    }
    if (sum > target || start >= candidates.length) return;

    for (let i = start; i < candidates.length; i++) {
      // 将重复的剪掉
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      // 这里的 start 是启动枚举的下标，但是插入到临时数组的值是当前下标的值
      dfs(i + 1, [...arr, candidates[i]], sum + candidates[i]);
    }
  };
  dfs(0, [], 0);

  return ret;
};
