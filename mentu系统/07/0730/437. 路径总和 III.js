/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/path-sum-iii/submissions/
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 * 方法：双递归
 * 外层递归：保证遍历到二叉树中所有的节点
 * 内部递归：才是真正的寻找当前节点的递归：以当前节点为根节点，路径和符合要求的情况。
 * 最后把所有的情况加到一起就是最终的结果。
 */
var pathSum = function (root, targetSum) {
  const recursion = root => {
    if (!root) return 0;
    // 以根节点出发，寻找符合要求的递归
    const dfs = (cRoot, leave) => {
      // 当前节点作为起点，符合条件的格式
      if (!cRoot) return 0;
      // 这是存在 一个节点的值就是目标路径和
      const flag = (cRoot.val === leave) ? 1 : 0;
      const cLeft = dfs(cRoot.left, leave - cRoot.val);
      const cRignt = dfs(cRoot.right, leave - cRoot.val);
      return flag + cLeft + cRignt;
    }
    // 以当前节点作为起点，满足条件的个数
    const page = dfs(root, targetSum);
    const left = recursion(root.left);
    const right = recursion(root.right);
    return page + left + right;
  }
  return recursion(root);
};