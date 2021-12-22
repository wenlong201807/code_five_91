/**
 * 题目 https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 * 通关 https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 子树的最大路径和 = 左子树提供的最大路径和 + 根节点值 + 右子树提供的最大路径和
 * 分别递归遍历左子树 和右子树的最大路径和，两者之前取最大值，返回；
 * 最后里面，要注意最后得出的是一个负数，直接返回0，否则正常的数据就直接返回
 */
/**
 * 通过
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER // 默认最大路径和
  const dfs = (root) => {
    if (root === null) {
      return 0
    }

    const left = dfs(root.left) // 左子树的最大路径和
    const right = dfs(root.right)

    // 当前子树内部最大路径和
    const innerMaxSum = left + root.val + right;
    maxSum = Math.max(maxSum, innerMaxSum) // 更新最大记录
    // 当前子树外部的最大路径和，小于0的情况
    const outputMaxSum = root.val + Math.max(left, right) // 当前子树对外提供的路径和

    // 如果对外提供的路径和小于0，直接返回0，否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum
  }

  dfs(root)

  return maxSum
};