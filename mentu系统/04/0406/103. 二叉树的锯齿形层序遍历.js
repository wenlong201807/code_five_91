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
 * 通过 https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/submissions/
 * @param {TreeNode} root
 * @return {number[][]}
 * 这道题与从上到下打印很相近，
 * 不同的就是将从上到下的结果，进行判断，所以未奇数的数组中的元素进行反转，所以为偶数的不变
 */
var zigzagLevelOrder = function (root) {
  let ans = [];
  getResult(root, 0, ans);
  for (let k = 1; k < ans.length; k += 2) {
    for (let i = 0, j = ans[k].length - 1; i < j; i++, j--) {
      [ans[k][i], ans[k][j]] = [ans[k][j], ans[k][i]];
    }
  };
  return ans;
};

// 通过 https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/submissions/
// 方法2
var helper = function (root, k, ans) {
  if (!root) return null;
  if (k === ans.length) ans.push([]);
  if (k % 2 === 0) {
    ans[k].push(root.val);
  } else {
    ans[k].unshift(root.val);
  }
  helper(root.left, k + 1, ans);
  helper(root.right, k + 1, ans);
}

var zigzagLevelOrder2 = function (root) {
  var ans = [];
  helper(root, 0, ans);
  return ans;
}