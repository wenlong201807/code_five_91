/**
 * 题目 https://leetcode-cn.com/problems/successor-lcci/
 * 通过 https://leetcode-cn.com/problems/successor-lcci/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  if (!root) return null;
  let arr = []
  let resInd = 0
  const dfs = (root) => {
    if (!root) return null;
    dfs(root.left)
    arr.push(root)
    if (root === p) {
      resInd = arr.length
    }
    dfs(root.right)
  }
  dfs(root)

  return arr[resInd] || null;
};