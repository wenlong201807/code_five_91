/**
 * 题目 https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * 通过 https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ancestor = root;
  while (true) {
    if (p.val < ancestor.val && q.val < ancestor.val) {
      return lowestCommonAncestor(ancestor.left, p, q)
    } else if (p.val > ancestor.val && q.val > ancestor.val) {
      return lowestCommonAncestor(ancestor.right, p, q)
    } else {
      // 一个小一个大，证明 ancestor 是最近的祖先
      break
    }
  }

  return ancestor;
};