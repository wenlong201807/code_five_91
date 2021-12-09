/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
 * 通过 https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/submissions/
 * @param {TreeNode} root
 * @return {number[][]}
 * 思路
 * 锯齿形遍历和层序遍历都是这道题的变形
 * dfs：深度优先搜索，先递归下去再回溯上来
 */
var levelOrder = function (root) {
  let array = [];
  getResult(root, 0, array);
  return array;
};