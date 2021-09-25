/**
 * 题目 
 * 通关 https://leetcode-cn.com/problems/validate-binary-search-tree/submissions/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 *
 * 1. 结构化思维，在思维中 逻辑中看成一个序列是否是一个有效序列
 * 2. 节点的左子树只包含小于当前节点的数
 * 3. 节点的右子树只包含大于当前节点的数
 * 4. 所有左子树和右子树自身必须也是二叉搜索树
 * 5. 在递归时保存上下界，然后按上述特征比较即可
 */

const inorder = (root, lower, upper) => {
  if (root === null) {
    return true;
  }

  if (root.val <= lower || root.val >= upper) {
    return false;
  }

  return (
    inorder(root.left, lower, root.val) && inorder(root.right, root.val, upper)
  );
};
var isValidBST = function (root) {
  return inorder(root, -Infinity, Infinity);
};
