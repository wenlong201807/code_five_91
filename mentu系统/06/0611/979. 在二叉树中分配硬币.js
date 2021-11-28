/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/distribute-coins-in-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {number}
 * 思想：移动硬币的次数， 转换成 每条边经过的硬币数量 统计出来 就是我们最后要求的结果
 */
var distributeCoins = function (root) {
  function dfs (root) {
    if (root === null) return [0, 0]; // 移动的步数，另一个是需要的金币的数量
    let left = dfs(root.left),
      right = dfs(root.right),
      read = (right[1] + left[1] + root.val - 1);
    return [Math.abs(read) + left[0] + right[0], read];
  }
  return dfs(root)[0]
};