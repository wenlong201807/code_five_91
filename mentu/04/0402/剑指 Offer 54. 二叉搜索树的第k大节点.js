/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * 
 * 思路
 * 二叉搜索树 中序遍历出来，是从小到大的。
 * 逆向中序遍历，然后找到第k个节点。
 */
var kthLargest = function (root, k) {
  if (!root) return null;
  let target = 0;
  let dfs = function (root) {
    if (!root) return null;
    dfs(root.right);
    if (!--k) return target = root.val;
    dfs(root.left);
  }

  dfs(root);
  return target;
};