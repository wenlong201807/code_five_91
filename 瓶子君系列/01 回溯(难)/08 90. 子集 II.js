/*
分析 -- 有重复值

1 和78. 子集相比，就是多了重复值，且不允许重复值出现在返回数组中，所以明显要先排序了
2 然后在回溯过程中，如果下一次迭代的值和当前值一样，则跳过，达到去重的效果
*/

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const ret = [];
  
  const dfs = (start, arr) => {
    ret.push(arr);
    if (start === nums.length) return; // start 超出下标，就是取到了最大下标值的时候了
    for (let i = start; i < nums.length; i++) {
      dfs(i + 1, [...arr, nums[i]]);
      while (nums[i] === nums[i + 1]) {
        i++; // 去重
      }
    }
  };

  dfs(0, []);

  return ret;
};
