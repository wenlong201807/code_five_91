/**
 * 題目：https://leetcode-cn.com/problems/symmetric-tree/
 * 通过: https://leetcode-cn.com/problems/symmetric-tree/submissions/
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
 */
var isSymmetric = function (root) {
  // 递归
  if (!root) {
    return true
  }

  return isMirror(root.left, root.right)
};

const isMirror = (leftroot, rightroot) => {
  if (!leftroot && !rightroot) return true;

  // if (!leftroot) return false;
  // if (!rightroot) return false;
  // 或者
  if (!leftroot || !rightroot) return false;
  if (leftroot.val !== rightroot.val) return false;

  // 如果两个节点自身相同，那么我们需要继续判断他们的孩纸节点是否也是对称的
  // 这包含了左子树的左右节点，右子树的左右节点
  // 即要保证：
  // 左子树的左节点 等于右子树的右节点；
  // 左子树的右节点 等于 右子树的左节点
  if (isMirror(leftroot.left, rightroot.right) && isMirror(leftroot.right, rightroot.left)) {
  // if (leftroot.val === rightroot.val && isMirror(leftroot.left, rightroot.right) && isMirror(leftroot.right, rightroot.left)) {
    return true;
  } else {
    return false;
  }
}