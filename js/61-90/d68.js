/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 备忘录的值初始化为 0
  let memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  let count = (lo, hi) => {
    // base case，显然当lo > hi闭区间[lo, hi]肯定是个空区间，也就对应着空节点 null，
    // 虽然是空节点，但是也是一种情况，所以要返回 1 而不能返回 0
    if (lo > hi) return 1;
    if (memo[lo][hi] != 0) return memo[lo][hi];
    let res = 0;
    for (let i = lo; i <= hi; i++) {
      // i 的值作为根节点 root
      let left = count(lo, i - 1);
      let right = count(i + 1, hi);
      // 左右子树的组合数乘积是 BST 的总数
      res += left * right;
    }
    memo[lo][hi] = res;
    return res;
  };
  // 计算闭区间 [1, n] 组成的 BST 个数
  return count(1, n);
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/unique-binary-search-trees/solution/tu-jie-di-gui-bei-wang-lu-fa-dai-ma-zhu-klbpc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
