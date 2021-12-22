/**
 * 题目 https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china
 * 通过，未掌握 https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 迭代
var kthSmallest = function (root, k) {
  let stack = []
  let node = root

  while (node || stack.length) {
    // 遍历左子树
    while (node) {
      stack.push(node)
      node = node.left
    }

    node = stack.pop()
    if (--k === 0) {
      return node.val;
    }

    node = node.right
  }
};