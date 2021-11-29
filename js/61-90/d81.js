/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  (path = []), (len = candidates.length);
  candidates.sort();
  backtracking(0, 0);
  return res;
  function backtracking(sum, i) {
    if (sum > target) return;
    if (sum === target) {
      res.push(Array.from(path));
      return;
    }
    let f = -1;
    for (let j = i; j < len; j++) {
      const n = candidates[j];
      if (n > target - sum || n === f) continue;
      path.push(n);
      sum += n;
      f = n;
      backtracking(sum, j + 1);
      path.pop();
      sum -= n;
    }
  }
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/combination-sum-ii/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-ig29/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
