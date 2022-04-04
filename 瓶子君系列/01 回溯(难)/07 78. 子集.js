/*
分析 -- 找规律

1 数组元素不相同，返回值不包含重复的子集，也就是不考虑位置排列情况
2 由于跟排列无关，所以只需要遍历一遍 nums 即可，没遍历一次获取到的值，都可以和现有的 ret 组合成新的一批数组，然后和旧的item组合成新的枚举数组
3 时间复杂度 O(n2){O(n^2)}O(n2)

作者：厨猿加加
链接：https://juejin.cn/post/7010321663912837151
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var subsets = function (nums) {
  let ret = [[]];
  for (let num of nums) {
    ret = [...ret, ...ret.map((item) => item.concat(num))];
  }
  return ret;
};

/*
分析 -- 迭代回溯

使用迭代的方法枚举所有的情况出来, 和多叉树遍历没啥区别
时间复杂度 {O(N^2)}O(N2)
*/
// 未通过
var subsets = function (nums) {
  const ret = [];

  const dfs = (start, arr) => {
    ret.push(arr);
    if (arr.length === nums.length || start === arr.length) return;
    for (let i = start; i < nums.length; i++) {
      dfs(i + 1, [...arr, nums[i]]);
    }
  };

  dfs(0, []);

  return ret;
};
