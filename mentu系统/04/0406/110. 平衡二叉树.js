/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var getHeight = function (root) {
  if (!root) return null;
  let l = getHeight(root.left);
  let r = getHeight(root.right);// dfs 常规操作，求出左右子树的高度
  if (l < 0 || r < 0) return -1;
  if (Math.abs(l - r) > 1) return -1; // 高度差超过1时，非平衡二叉树，直接返回结果
  return Math.max(l, r) + 1;// 这里+1时因为要把父节点高度算进去
}
/**
 * 通过 https://leetcode-cn.com/problems/balanced-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {boolean}
 * 思路
 * 先获取二叉树的高度，然后依次遍历他们的左右子树，如果不平衡，就返回负数；
 * 如果时平衡二叉树，就返回树的高度；
 */
var isBalanced = function (root) {
  return getHeight(root) >= 0;
};