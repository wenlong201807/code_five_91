/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/diameter-of-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // 默认为1 是因为默认根节点自身的路径长度
  let ans = 1;
  function depth (rootNode) {
    if (!rootNode) {
      // 因为不存在根节点，所以深度为0；
      return 0;
    }

    let L = depth(rootNode.left);
    let R = depth(rootNode.right);
    // 获取树的最长路径
    // L+R+1 = 左子树深度(节点个数) + 右子树深度(节点个数) + 1个根节点
    ans = Math.max(ans, L + R + 1);
    // 已经知道，因为根节点的左右子树的深度，则左右子树深度的最大值+1，即是以根节点为主的最大深度
    return Math.max(L, R) + 1;
  }

  depth(root);
  // 由于depth 函数中已经默认加上自身根节点路径，所以最后减去1
  return ans - 1;
};