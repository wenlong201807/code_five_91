/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/deepest-leaves-sum/submissions/
 * @param {TreeNode} root
 * @return {number}
 * 技巧：记录两个值，2个是已经找到的当前节点的最大深度，另一个是现在记录到的最大深度的和值
 */
var deepestLeavesSum = function (root) {
  let ans = [0], maxDepth = [-1];
  getResult(root, ans, 0, maxDepth);
  return ans[0];
};

var getResult = function (root, ans, depth, maxDepth) {
  if (root == null) {
    return;
  }
  if (maxDepth[0] < depth) {
    maxDepth[0] = depth;
    ans[0] = root.val;
  } else {
    if (maxDepth[0] == depth) {
      ans[0] += root.val;
    }
  }
  getResult(root.left, ans, depth + 1, maxDepth);
  getResult(root.right, ans, depth + 1, maxDepth);
}