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
 * 
 * 整体思路
 * 给了一个前序遍历数组和中序遍历数组，
 * 根据特性可知：前序遍历： 根左右， 中序遍历：左根右
 * 
 * 前序遍历数组的第一个元素，是整个树的根节点，通过此判断，就可以获取到根节点的值。
 * 在中序遍历中，找到根节点的位置是mid，由此，可以分割左右子树 。左子树 pStart~mid-1 右子树 mid+1 ~ inorder.length - 1。
 * 要获取左子树的节点个数 leftNum ,用来获取在前序遍历数组中左子树和右子树的分割点。
 * 左子树：pStart + 1 ~ pStart + leftNum， 右子树：pStart + leftNum+1 ~ inorder.length - 1
 */
var buildTree = function (preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  const helper = function (pStart, pEnd, iStart, iEnd) {
    // 证明前序遍历数组已经使用完毕
    if (pStart > pEnd) return null;
    // 获取根节点
    let rootVal = preorder[pStart];
    //  构造一个根节点
    let root = new TreeNode(rootVal);
    //  获取根节点在中序遍历数组中的索引位置，来分割左右树
    let mid = map.get(rootVal);
    // 计算左子树的节点个数，用来在前序遍历数组确定左子树结束的位置
    let leftNum = mid - iStart;
    // 递归的构建左子树
    root.left = helper(pStart + 1, pStart + leftNum, iStart, mid - 1);
    // 递归的构建右子树
    root.right = helper(pStart + leftNum + 1, pEnd, mid + 1, iEnd);
    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};