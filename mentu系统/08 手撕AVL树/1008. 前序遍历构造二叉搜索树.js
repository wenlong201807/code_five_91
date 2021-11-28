/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 * 前序遍历特点 根 左 右
 * 中序遍历特点 左 根 右
 * 类似题目 108 题
 */

const buildTree = (nums, l, r) => {
  if (l > r) return null;
  let ind = l + 1;
  while (ind <= r && nums[ind] < nums[l]) ++ind; // 证明ind指向左子树
  let root = new TreeNode(nums[l]);
  root.left = buildTree(nums, l + 1, ind - 1)
  root.right = buildTree(nums, ind, r)
  return root;
}
var bstFromPreorder = function (preorder) {
  return buildTree(preorder, 0, preorder.length - 1)
};