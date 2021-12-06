/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 参考学习 https://leetcode-cn.com/problems/binary-tree-postorder-traversal/solution/bang-ni-dui-er-cha-shu-bu-zai-mi-mang-che-di-chi-t/
 * 通过 https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/
 * @param {TreeNode} root
 * @return {number[]}
 */

var postorderTraversalNode = function (node, res) {
  if (node) {
    postorderTraversalNode(node.left, res);
    postorderTraversalNode(node.right, res);
    res.push(node.val);
  }
  return res;
}
var postorderTraversal = function (root) {
  let res = [];
  return postorderTraversalNode(root, res);
};

// 迭代法
// 通过 https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/
var postorderTraversal2 = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [root];
  while (stack.length) {
    root = stack.pop();
    res.unshift(root.val);
    if (root.left) stack.push(root.left);
    if (root.right) stack.push(root.right);
  }
  return res;
}