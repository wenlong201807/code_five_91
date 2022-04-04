/*
1 由于这个时候包含了重复的数字了，且不能有重复值，所以可以考虑到先排序
2 整理思路和题1 一直，都是缓存两个数组，而且由于值有重复，所以不能用值是否相同来判断，只能用下标判断了
3 区别在于，每一次回溯回来，需要判断下一次的值是否和当前回溯值一样，如果一样就需要跳过，防止出现重复排列
4 时间复杂度 O(n2){O(n^2)}O(n2),空间复杂度 O(n){O(n)}O(n)

作者：厨猿加加
链接：https://juejin.cn/post/7010321663912837151
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var permuteUnique = function (nums) {
  const ret = [];
  const len = nums.length;
  nums.sort((a, b) => a - b); // 排序
  const dfs = (arr, indexArr) => {
    if (arr.length === len) {
      ret.push(arr);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!!indexArr[i]) continue;
      const num = nums[i];
      indexArr[i] = 1;
      dfs([...arr, num], indexArr);
      indexArr[i] = 0;
      // 回溯回来，如果下一个值一样，那么就是要重复走之前的老路了，所以还是直接跳过的好
      while (nums[i + 1] === nums[i]) {
        i++;
      }
    }
  };
  dfs([], []);
  return ret;
};

console.log(permuteUnique([1, 1, 2]));
