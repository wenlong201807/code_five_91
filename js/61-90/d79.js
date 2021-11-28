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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  function dfs (root) {
    if (root == null)
      return 0;
    const l = dfs(root.left),
      r = dfs(root.right);
    if (l == 0)
      root.left = null;
    if (r == 0)
      root.right = null;
    return l + r + root.val;
  }
  return dfs(root) == 0 ? null : root
};

  // 作者：reiyei
  // 链接：https://leetcode-cn.com/problems/binary-tree-pruning/solution/814er-cha-shu-jian-zhi-dfsdi-gui-qiu-he-cjyk4/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。