/*
1 路径是 root-leaf 完整路线上的和为 target
2 dfs 中序遍历走下去即可
3 时间复杂度 {O(n)}O(n)
*/

var hasPathSum = function (root, targetSum) {
  let ret = false;
  const dfs = (root, sum) => {
    if (ret || !root) return; // 只要一条路走通了，其他都不用走了
    sum += root.val;
    if (!root.left && !root.right && sum === targetSum) {
      ret = true;
      return;
    }
    if (root.left) dfs(root.left, sum);
    if (root.right) dfs(root.right, sum);
  };

  dfs(root, 0);

  return ret;
};

// 层序遍历规则生成的数组
const root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
const a = hasPathSum(root, targetSum)
console.log(a);
