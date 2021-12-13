/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/submissions/
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 * 做法就是第一次中序遍历第一棵树，接着遍历中序遍历第二棵树，讲两个有序序列合并成一个有序序列。
 * 二叉搜索树就是二叉排序数的特性：中序遍历最后返回的是一个有序序列，然后就
 */
// 实现中序遍历的过程
var getNum = function (root, nums) {
  if (root == null) return;
  getNum(root.left, nums);
  nums.push(root.val);
  getNum(root.right, nums);
  return;
}

var getAllElements = function (root1, root2) {
  let temp = [];
  let lnums = [], rnums = [];
  getNum(root1, lnums);
  getNum(root2, rnums);
  // 档期那还有元素没有被合并进去的时候
  var p1 = 0, p2 = 0;
  while (p1 < lnums.length || p2 < rnums.length) {
    if ((p2 >= rnums.length) || (p1 < lnums.length && lnums[p1] < rnums[p2])) {
      temp.push(lnums[p1++]);
    } else {
      temp.push(rnums[p2++]);
    }
  }
  return temp;
};