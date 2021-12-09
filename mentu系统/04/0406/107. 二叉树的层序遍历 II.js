/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var getResult = function (root, k, array) {
  if (!root) return null;
  // k用来标记当前遍历到了第几层
  if (k === array.length) array.push(new Array());
  array[k].push(root.val);
  getResult(root.left, k + 1, array);
  getResult(root.right, k + 1, array);
}
/**
 * 未通过
 * @param {TreeNode} root
 * @return {number[][]}
 * 思路
 * 这道题是offer32题的结果数组，进行反转得到
 * 因为层序遍历时从下到上，上一道题时从上到下遍历，
 */
var levelOrderBottom = function (root) {
  let ans = [];
  getResult(root, 0, ans);
  // 重点，反转
  for (let i = 0; j = ans.length - 1, i < j; i++, j--) {
    [ans[i], ans[j]] = [ans[j], ans[i]];
  }
  return ans;
};