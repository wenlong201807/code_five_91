/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 通过
 */
var preorderTraversal = function (root) {
  let res = [];
  // 遍历函数
  function traversal (root) {
    if (root !== null) {
      // 访问根节点的值
      res.push(root.val);
      if (root.left) {
        // 递归遍历左子树
        traversal(root.left);
      };
      if (root.right) {
        // 递归遍历右子树
        traversal(root.right);
      };
    };
  };
  traversal(root);
  return res;
};


// 通过 https://leetcode-cn.com/problems/binary-tree-preorder-traversal/submissions/
var travese = function (root, ans) {
  if (!root) return null;
  ans.push(root.val);
  travese(root.left, ans);
  travese(root.right, ans);
}
// 前序遍历
var preorderTraversal = function (root) {
  let ans = [];
  travese(root, ans);
  return ans;
};
