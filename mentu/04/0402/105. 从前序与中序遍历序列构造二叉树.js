/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 依据根节点的前中后顺序
 * 前序，根左右
 * 中序  左根右
 * 后续  左右根
 * 层序
 */
var buildTree = function (preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++){
    map.set(inorder[i],i)
  }

  const helper = function (pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd) return null;
    let rootVal = preorder[pStart];
    let root = new TreeNode(rootVal);
    let mid = map.get(rootVal);
    let leftNum = mid - iStart;
    root.left = helper(pStart+1, )
  }
};