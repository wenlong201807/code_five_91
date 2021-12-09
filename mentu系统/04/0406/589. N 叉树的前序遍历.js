/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 通过 https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/submissions/
 * @param {Node} root
 * @return {number[]}
 * 前序遍历： 根左右
 * 中序遍历：左根右
 * 后序遍历： 左右跟
 */
// 对根节点children；递归，封装函数
var traverse = function (root, ans) {
  if (!root) return null;
  ans.push(root.val);
  for (x of root.children) {
    traverse(x, ans);
  }
  return ans;
}
var preorder = function (root) {
  let ans = [];
  traverse(root, ans);
  return ans;
};