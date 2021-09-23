/**
 * 题目 https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 * 通关 https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/submissions/
 * 
 * 参考资料 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 *
 * 构建一颗树包括 构建root，构建 root.left  root.right
 * 要求高度平衡 构建 root 时候，选择数组的中间元素作为 root 节点值，即可保持平衡
 * 递归函数可以传递数组，也可以传递指针，选择传递指针的时候， lr 分别代表参与构建BST的数组的首位索引
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const buildTree = (nums, l, r) => {
  if (l > r) {
    return null; // 构成不了区间，返回null
  }

  let mid = (l + r) >>> 1; // 求中间索引
  let root = new TreeNode(nums[mid]); // 构建当前节点

  root.left = buildTree(nums, l, mid - 1); // 构建左子树
  root.right = buildTree(nums, mid + 1, r); // 构建右子树

  return root;
};
var sortedArrayToBST = function (nums) {
  return buildTree(nums, 0, nums.length - 1); // 递归的入口
};
