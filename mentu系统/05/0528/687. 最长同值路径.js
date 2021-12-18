/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/longest-univalue-path/submissions/
 * 00：48：26结束
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let res = 0;
  const dfs = (root) => {
    if (root == null) {
      return 0;
    }
    const left = dfs(root.left);
    const right = dfs(root.right);
    let leftPath = 0, rightPath = 0;
    if (root.left && root.left.val === root.val) {
      leftPath = left + 1;
    }
    if (root.right && root.right.val === root.val) {
      rightPath = right + 1;
    }
    res = Math.max(res, leftPath + rightPath);
    return Math.max(rightPath, leftPath);
  }
  dfs(root);
  return res;
};