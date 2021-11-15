/**
 * 题目 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 参考资料 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/dai-ma-sui-xiang-lu-qiu-shu-de-zui-da-sh-f988/
 * 
 * 通过 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   if (!root) return root;

//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
// };
