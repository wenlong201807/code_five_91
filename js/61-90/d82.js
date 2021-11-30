var permuteUnique = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let result = [];
  let path = [];

  function backtracing(used) {
    if (path.length === nums.length) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        backtracing(used);
        path.pop();
        used[i] = false;
      }
    }
  }
  backtracing([]);
  return result;
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/permutations-ii/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-ki1h/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
