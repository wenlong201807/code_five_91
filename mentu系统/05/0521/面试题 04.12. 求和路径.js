/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/paths-with-sum-lcci/submissions/
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 * 思路
 * 主要分为两种情况：
 * 一是以根节点位起点的，这样的，我们就递归左子树，递归右子树，找一个和位sum的路径数量。
 * 一个不是以根节点为起点的，是一个节点是sum的
 */

// 找到一个节点开始，路径和为sum的所有路径
var dfs = function (root, sum) {
  if (root === null) return 0;
  let val = sum - root.val;// root.val == sum 证明找到一条路径
  return (root.val == sum) + dfs(root.left, val) + dfs(root.right, val);
}

var pathSum = function (root, sum) {
  if (root === null) return 0;
  // 以root为起点查找和的值为sum的路径数量，在左子树查找和的值为sum的路径数量，在右子树查找和的值为sum的路径数量
  return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};