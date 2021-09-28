/**
 * 题目 https://leetcode-cn.com/problems/balance-a-binary-search-tree/
 * 通关 https://leetcode-cn.com/problems/balance-a-binary-search-tree/submissions/
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
 * @return {TreeNode}
 */

function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


var balanceBST = function (root) {
  const trees = []
  inorder(root) // 中序遍历，将原来节点树变成有序数组
  return buildTree(trees) // 构造平衡二叉树

  function inorder (root) {
    if (root === null)
      return;

    inorder(root.left)
    trees.push(root.val)
    inorder(root.right)
  }

  function buildTree (arr) {
    if (arr.length === 0)
      return null;

    const mid = arr.length >> 1; // 获取中间元素的方法
    const root = new TreeNode(arr[mid]);
    root.left = buildTree(arr.slice(0, mid))
    root.right = buildTree(arr.slice(mid + 1))
    return root
  }
};
