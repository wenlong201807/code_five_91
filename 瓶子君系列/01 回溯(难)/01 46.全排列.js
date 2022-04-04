/*
1 不含重复数字，要求的是全排列，所以不同顺序的排列都得算上，这样在枚举过程中要知道自己曾经获取过哪些值
2 在枚举过程中缓存两个数组 arr,getIndex, arr 是枚举过程中的数组， getIndex 是走过值状态，如果当前 arr 走过对应的下标的值为1，没有走过就是 0
3 在每一层给临时数组 arr 添加值的时候，需要保证不会重复添加，可以在每一次遇到的时候再遍历 arr，由于值是唯一的，也是可以的；
在这里是用空间换时间，用 getIndex 数组缓存对应的状态，每一次查找的复杂度是 O(1){O(1)}O(1)
4 每一次需要枚举完整的数组，需要枚举 n 次所以时间复杂度为 O(n2){O(n^2)}O(n2),空间复杂度 O(n){O(n)}O(n)

作者：厨猿加加
链接：https://juejin.cn/post/7010321663912837151
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var permute = function (nums) {
  let ret = [];

  const dfs = (arr, getIndex) => {
    if (arr.length === nums.length) {
      ret.push(arr); // arr 形成闭包，一直会保留在函数中，并且每一层递归都有一个旧值保留着
      return; // -> getIndex[i] = 0; 递归衔接点
    }
    for (let i = 0; i < nums.length; i++) {
      if (!!getIndex[i]) continue; // 如果存在，则代表已经有这个值了
      const num = nums[i];
      getIndex[i] = 1;
      dfs([...arr, num], getIndex);
      getIndex[i] = 0;
    }
  };

  const getIndexArr = new Array(nums.length);
  dfs([], getIndexArr);

  return ret;
};

const nums = [1,2,3]
// const a = permute(nums)
// console.log(a)


var permute1 = function (nums) {
  function dfs (nums, track) {
    if (track.length === nums.length) {
      res.push(track)
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (track.includes(nums[i])) {
        continue;
      }
      track.push(nums[i]);
      const newTrack = [...track];
      dfs(nums, newTrack);
      track.pop()
    }
  }
  const res = [];
  dfs(nums, []);
  return res;
};

const a = permute1(nums)
console.log(a)
