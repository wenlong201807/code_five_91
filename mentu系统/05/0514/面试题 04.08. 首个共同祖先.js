/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/first-common-ancestor-lcci/submissions/
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 5和1 的祖先是3，6和4 的祖先就不是3了，就是5了。
 * 这个题用递归就可以得到这个过程
 * 当前函数代表的返回含义：
 * 如果p q存在于当前节点的左右两侧，左侧可以找到p值，右侧可以找到q值；
 * 如果左右子树查找的值不为空，证明但钱查找的节点就是最近公共祖先
 * 如果左子树为空，右子树不为空，证明我在 一个子树中找到了某一个节点，把这个结果正常返回就行。
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (root == p || root == q) return root;
  let rootLeft = lowestCommonAncestor(root.left, p, q);// 在左子树找到结果
  let rootRight = lowestCommonAncestor(root.right, p, q);// 在右子树找到结果
  if (rootLeft != null && rootRight != null) return root;
  // 左子树不为空 并且右子树不为空，在左子树中找到了一个p跟q，在右子树中找到了一个p跟q，但钱节点就是最近公共祖先
  if (rootLeft != null) return rootLeft;
  return rootRight;
};