/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 通关 https://leetcode-cn.com/problems/cousins-in-binary-tree/submissions/
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let x_parent = null, x_depth = null, x_found = false;
  let y_parent = null, y_depth = null, y_found = false;
  const dfs = (node, depth, parent) => {
    if (!node) {
      return;
    }
    if (node.val === x) {
      [x_parent, x_depth, x_found] = [parent, depth, true]
    } else if (node.val === y) {
      [y_parent, y_depth, y_found] = [parent, depth, true]
    }
    if (x_found && y_found) {
      return;
    }
    dfs(node.left, depth + 1, node);
    if (x_found && y_found) {
      return;
    }
    dfs(node.right, depth + 1, node);
  }

  dfs(root, 0, null);
  return x_depth === y_depth && x_parent !== y_parent;
};